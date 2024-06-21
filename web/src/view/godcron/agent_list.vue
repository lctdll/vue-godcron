<template>
    <div>
      <div class="gva-table-box">
        <div class="gva-btn-list">
        <el-button
          type="primary"
          icon="plus"
          @click="addMenu(0)"
        >新增Agent</el-button>
 
      </div>

        <!-- 由于此处菜单跟左侧列表一一对应所以不需要分页 pageSize默认999 -->
        <el-table :data="tableData" row-key="ID" >
          <!-- <el-table-column type="selection" width="55" /> -->
          <el-table-column align="left" label="ID" min-width="100" prop="ID" />
          <!-- <el-table-column align="left" label="展示名称" min-width="120" prop="authorityName" >
            <template #default="scope">
              <span>{{ scope.row.meta.title }}</span>
            </template>
          </el-table-column> -->
 
          <el-table-column align="left" label="AgentAddress" show-overflow-tooltip min-width="160"  prop="agent_addr" />
          <!-- <el-table-column align="left" label="是否隐藏" min-width="100" prop="hidden" >
            <template #default="scope">
              <span>{{ scope.row.hidden ? "隐藏" : "显示" }}</span>
            </template>
          </el-table-column> -->
 
          <el-table-column align="left" fixed="right" label="操作" width="300">
            <template #default="scope">
              <!-- <el-button type="primary" link icon="plus" @click="addMenu(scope.row.ID)" >添加子菜单</el-button> -->
              <!-- <el-button
                type="primary"
                link
                icon="edit"
                @click="editMenu(scope.row.ID)"
              >编辑</el-button> -->
              <el-button type="primary" link icon="delete" @click="deleteMenu(scope.row.agent_addr)" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="gva-pagination">
        <el-pagination :current-page="page" :page-size="pageSize" :page-sizes="[10, 30, 50, 100]" :total="total" layout="total, sizes, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
       </div>
      </div>

      <el-drawer v-model="dialogFormVisible" size="60%" :before-close="handleClose" :show-close="false" >
      <template #header>
        <div class="flex justify-between items-center">
          <span class="text-lg">{{ dialogTitle }}</span>
          <div>
            <el-button @click="closeDialog">取 消</el-button>
            <el-button
              type="primary"
              @click="enterDialog"
            >确 定</el-button>
          </div>
        </div>
      </template>
      <warning-bar title="新增主机，需要在角色管理内配置权限才可使用" />
      <el-form  v-if="dialogFormVisible"  ref="menuForm"   :model="form" :rules="rules"   label-width="85px" >
        <el-form-item label="agent_addr" prop="agent_addr"  >
          <el-input v-model="form.agent_addr" autocomplete="off" placeholder="IP:PORT" @change="changeName" />
        </el-form-item>
        
      </el-form>
  
 
    </el-drawer>
    <!-- <el-table :data="orderDetails">
      <el-table-column prop="operation" label="操作"></el-table-column>
      <el-table-column prop="product" label="购买产品"></el-table-column>
      <el-table-column prop="model" label="型号/规格"></el-table-column>
      <el-table-column prop="price" label="单价"></el-table-column>
      <el-table-column prop="quantity" label="数量">
        <template #default="scope"> 
          <el-input v-model="scope.row.quantity" autocomplete="off" placeholder="IP:PORT" @change="changeName" /> 
             <el-button size="small" type="danger" @click="deleteRow(scope.$index)">
               Delete
              </el-button>
           </template>
      </el-table-column>
      <el-table-column prop="subtotal" label="小计金额">
        <template #default="scope"> 
        <el-input v-model="scope.row.subtotal" autocomplete="off" placeholder="IP:PORT" @change="changeName" /> 
           <el-button size="small" type="danger" @click="deleteRow(scope.$index)">
             Delete
            </el-button>
         </template>
      </el-table-column>
      
     
    </el-table>
    <el-button type="primary" @click="addOrderDetail">新增+</el-button> -->


    </div>
  </template>

  
<script setup>
import {
  updateBaseMenu,
  getMenuList,
  addBaseMenu,
  deleteBaseMenu,
  getBaseMenuById,
} from '@/api/menu'
import {
    deleteBaseAgent,
    createAgentTable,
    getAgentTableList,
} from '@/api/manager/manger'
import icon from '@/view/superAdmin/menu/icon.vue'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { canRemoveAuthorityBtnApi } from '@/api/authorityBtn'
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { QuestionFilled, VideoCameraFilled } from '@element-plus/icons-vue'

import { toDoc } from '@/utils/doc'
const orderDetails = reactive([
  {
    operation: "",
    product: "请选择",
    model: "",
    price: 0.00,
    quantity: 0,
    subtotal: 0.00,
  },
  // 其他预定义的行...
])
const addOrderDetail = ()  => {
  orderDetails.push({
    operation: "",
    product: "请选择",
    model: "",
    price: 0.00,
    quantity: 0,
    subtotal: 0.00,
  })
}
const deleteRow = (index) => {
  orderDetails.splice(index, 1);
};

defineOptions({
  name: 'Menus',
})

const rules = reactive({
  path: [{ required: true, message: '请输入菜单name', trigger: 'blur' }],
  component: [{ required: true, message: '请输入文件路径', trigger: 'blur' }],
  'meta.title': [
    { required: true, message: '请输入菜单展示名称', trigger: 'blur' },
  ],
})

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({})
// // 查询
// const getTableData = async() => {
//   const table = await getMenuList({
//     page: page.value,
//     pageSize: pageSize.value,
//     ...searchInfo.value,
//   })
//   if (table.code === 0) {
//     tableData.value = table.data.list
//     total.value = table.data.total
//     page.value = table.data.page
//     pageSize.value = table.data.pageSize
//   }
// }

// getTableData()

// 查询
const getTableData = async() => {
  //console.log(page.value,pageSize.value)
  const table = await getAgentTableList({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 新增参数
const addParameter = (form) => {
  if (!form.parameters) {
    form.parameters = []
  }
  form.parameters.push({
    type: 'query',
    key: '',
    value: '',
  })
}

const fmtComponent = () => {
  form.value.component = form.value.component.replace(/\\/g, '/')
}

// 删除参数
const deleteParameter = (parameters, index) => {
  parameters.splice(index, 1)
}

// 新增可控按钮
const addBtn = (form) => {
  if (!form.menuBtn) {
    form.menuBtn = []
  }
  form.menuBtn.push({
    name: '',
    desc: '',
  })
}
// 删除可控按钮
const deleteBtn = async(btns, index) => {
  const btn = btns[index]
  if (btn.ID === 0) {
    btns.splice(index, 1)
    return
  }
  const res = await canRemoveAuthorityBtnApi({ id: btn.ID })
  if (res.code === 0) {
    btns.splice(index, 1)
  }
}

const form = ref({
  ID: 0,
  agent_addr: '',
})
const changeName = () => {
  form.value.path = form.value.name
}

const handleClose = (done) => {
  initForm()
  done()
}
// 删除菜单
const deleteMenu = (agent_addr) => {
  ElMessageBox.confirm('此操作将永久删除所有角色下该菜单, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async() => {
      const res = await deleteBaseAgent({ agent_addr })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '删除成功!',
        })
        if (tableData.value.length === 1 && page.value > 1) {
          page.value--
        }
        getTableData()
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}
// 初始化弹窗内表格方法
const menuForm = ref(null)
const checkFlag = ref(false)
const initForm = () => {
  checkFlag.value = false
  menuForm.value.resetFields()
  form.value = {
    ID: 0,
    agent_addr: '',
  }
}
// 关闭弹窗

const dialogFormVisible = ref(false)
const closeDialog = () => {
  initForm()
  dialogFormVisible.value = false
}
// 添加menu
const enterDialog = async() => {
  menuForm.value.validate(async(valid) => {
    if (valid) {
      let res
      if (isEdit.value) {
        //res = await updateBaseMenu(form.value)
      } else {
        res = await createAgentTable(form.value)
      }
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: isEdit.value ? '编辑成功' : '添加成功!',
        })
        getTableData()
      }
      initForm()
      dialogFormVisible.value = false
    }
  })
}

const menuOption = ref([
  {
    ID: '0',
    //title: '根菜单',
  },
])
const setOptions = () => {
  menuOption.value = [
    {
      ID: 0,
    //   title: '根目录',
    },
  ]
  setMenuOptions(tableData.value, menuOption.value, false)
}
const setMenuOptions = (menuData, optionsData, disabled) => {
  menuData &&
    menuData.forEach((item) => {
      if (item.children && item.children.length) {
        const option = {
          //title: item.meta.title,
          ID: item.ID,
          disabled: disabled || item.ID === form.value.ID,
          children: [],
        }
        setMenuOptions(
          item.children,
          option.children,
          disabled || item.ID === form.value.ID
        )
        optionsData.push(option)
      } else {
        const option = {
          //title: item.meta.title,
          ID: item.ID,
          disabled: disabled || item.ID === form.value.ID,
        }
        optionsData.push(option)
      }
    })
}

// 添加菜单方法，id为 0则为添加根菜单
const isEdit = ref(false)
const dialogTitle = ref('新增菜单')
const addMenu = (id) => {
  dialogTitle.value = '新增菜单'
  form.value.parentId = id
  isEdit.value = false
  setOptions()
  dialogFormVisible.value = true
}
// 修改菜单方法
const editMenu = async(id) => {
  dialogTitle.value = '编辑菜单'
  const res = await getBaseMenuById({ id })
  form.value = res.data.menu
  isEdit.value = true
  setOptions()
  dialogFormVisible.value = true
}

// 生命周期钩子
// onMounted(() => {
//   console.log(`The initial count is ${count.value}.`)
// })

</script>













<style scoped lang="scss">
.warning {
  color: #dc143c;
}
.icon-column {
  display: flex;
  align-items: center;
  .el-icon {
    margin-right: 8px;
  }
}
</style>
