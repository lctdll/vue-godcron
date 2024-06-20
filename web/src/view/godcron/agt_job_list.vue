<template>
    <div>
      <div class="gva-search-box">
        <el-form
          ref="searchForm"
          :inline="true"
          :model="searchInfo"
        >
          <el-form-item label="Agent">
            <el-select v-model="searchInfo.agent_addr" clearable placeholder="请选择" >
              <el-option
                v-for="(item, index) in agent_addr_list" :key="index" :label="item.agent_addr" :value="item.agent_addr" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="search"
              @click="onSubmit"
            >查询</el-button>
          </el-form-item>
        </el-form>
      </div>



      <div class="gva-table-box">

        <!-- 由于此处菜单跟左侧列表一一对应所以不需要分页 pageSize默认999 -->
        <el-table :data="tableData" row-key="id" >
          <!-- <el-table-column type="selection" width="55" /> -->
          <el-table-column align="left" label="ID" min-width="100" prop="id" />
          <el-table-column align="left" label="Name" min-width="100" prop="name" />
          <el-table-column align="left" label="Cron" min-width="100" prop="spec" />
          <el-table-column align="left" label="Running" min-width="100" prop="isRunning" />
          <el-table-column align="left" label="Text" min-width="100" prop="text" />
          <!-- <el-table-column align="left" label="展示名称" min-width="120" prop="authorityName" >
            <template #default="scope">
              <span>{{ scope.row.meta.title }}</span>
            </template>
          </el-table-column> -->
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
              <el-button type="primary" link v-if="scope.row.isRunning" @click="stopAgentJob(searchInfo.agent_addr,scope.row.name,scope.$index)">暂停</el-button>
              <el-button type="primary" link v-else @click="startAgentJob(searchInfo.agent_addr,scope.row.name,scope.$index)">启动</el-button>  
              <el-button type="primary" link icon="delete" @click="deleteAgentJob(searchInfo.agent_addr,scope.row.name)" >删除</el-button>
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
      <warning-bar title="新增菜单，需要在角色管理内配置权限才可使用" />
      <el-form  v-if="dialogFormVisible"  ref="menuForm"   :model="form" :rules="rules"   label-width="85px" >
        <el-form-item label="agent_addr" prop="agent_addr"  >
          <el-input v-model="form.agent_addr" autocomplete="off" placeholder="唯一英文字符串" @change="changeName" />
        </el-form-item>
        
      </el-form>
  
 
    </el-drawer>


    </div>
</template>

  
<script setup>
import {
  deletebaseAgentJob,
  actiontAgentJob,
  getAgentJobList,
} from '@/api/manager/mangjob'
import {
    getAgentTableList,
} from '@/api/manager/manger'
import icon from '@/view/superAdmin/menu/icon.vue'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { canRemoveAuthorityBtnApi } from '@/api/authorityBtn'
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { QuestionFilled, VideoCameraFilled } from '@element-plus/icons-vue'

import { toDoc } from '@/utils/doc'

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
const agent_addr_list = ref([])
const searchInfo = ref({})
const tableData = ref([])
// {
//       "id": 1,
//       "name": "src",
//       "spec": "* * * * * *",
//       "exec": "bash",
//       "text": "s",
//       "isRunning": true
// }

// 查询agentList
const getAgentListData = async() => {
  const table = await getAgentTableList({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  })
  if (table.code === 0) {
    agent_addr_list.value = table.data.list
  }
}
getAgentListData()

const onReset = () => {
  searchInfo.value = {}
}
// 搜索
const onSubmit = () => {
  page.value = 1
  pageSize.value = 10
  getJobList()
}

// 查询job list
const getJobList = async() => {
  //console.log(searchInfo.value)
  const table = await getAgentJobList({
    page: page.value,
    pageSize: pageSize.value,
    ...searchInfo.value,
  })
  if (table.code === 0) {
    console.log(table.data.list)
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

// 暂停agentjob stopAgentJob
const stopAgentJob = async(agent_addr,job_name,oox) => {
  //console.log( agent_addr,job_name,oox )
  const res = await actiontAgentJob({ agent_addr,job_name,action:"stop" })
  if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '暂停成功!',
        })
        getJobList()
  }
}

// 启动agentjob startAgentJob
const startAgentJob = async(agent_addr,job_name,oox) => {
  //console.log( agent_addr,job_name,oox )
  const res = await actiontAgentJob({ agent_addr,job_name,action:"start" })
  if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '启动成功!',
        })
        getJobList()
  }
}


// 删除agent job
const deleteAgentJob = (agent_addr,job_name) => {
  //console.log( agent_addr,job_name )
  ElMessageBox.confirm('此操作将永久删除所有角色下该菜单, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async() => {
      const res = await deletebaseAgentJob({ agent_addr,job_name })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '删除成功!',
        })
        if (tableData.value.length === 1 && page.value > 1) {
          page.value--
        }
        getJobList()
      }
    })
    .catch((error) => {
      console.log('用户取消了操作',error);
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}

// // 分页
// const handleSizeChange = (val) => {
//   pageSize.value = val
//   getTableData()
// }

// const handleCurrentChange = (val) => {
//   page.value = val
//   getTableData()
// }

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

const fmtComponent = () => {
  form.value.component = form.value.component.replace(/\\/g, '/')
}

 
 


const changeName = () => {
  form.value.path = form.value.name
}

const handleClose = (done) => {
  initForm()
  done()
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
