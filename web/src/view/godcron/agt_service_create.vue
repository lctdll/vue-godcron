<template>

    <div class="gva-table-box">
      <el-form
          ref="searchForm"
          :inline="true"
        
        >
          <el-form-item label="Agent">
            <el-select v-model="hosts" clearable placeholder="请选择" >
              <el-option
                v-for="(item, index) in agent_addr_list" :key="index" :label="item.agent_addr" :value="item.agent_addr" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="search"
              @click="getAgentSvcList"
            >查询</el-button>
          </el-form-item>
          <el-form-item><el-button  type="primary" icon="plus" @click="addMenu(0)" >创建监控</el-button></el-form-item>
      </el-form>
      


      <el-table :data="svcData"  >
        <!-- <el-table-column type="selection" width="55" /> -->
        <el-table-column align="left" label="Name" min-width="100" prop="Name" />
        <el-table-column align="left" label="IsRunning" show-overflow-tooltip min-width="160"   >
          <template #default="scope">
            <Tag :value="scope.row.IsRunning" :severity="getSeverity(scope.row.IsRunning)" />
          </template>
        </el-table-column>
        <el-table-column align="left" label="AutoStart" show-overflow-tooltip min-width="160"  prop="AutoStart" />
        <el-table-column align="left" label="Uptime" show-overflow-tooltip min-width="160"  prop="Uptime" />
        <el-table-column align="left" label="Host" show-overflow-tooltip min-width="160"  prop="Host" />
        <el-table-column align="left" fixed="right" label="Action" width="300">
          <template #default="scope">
            <!-- <el-button type="primary" link icon="plus" @click="addMenu(scope.row.ID)" >添加子菜单</el-button> -->
            <!-- <el-button
              type="primary"
              link
              icon="edit"
              @click="editMenu(scope.row.ID)"
            >编辑</el-button> -->
            <el-button type="primary" link icon="delete" @click="delAgentSvc(scope.row.Host,scope.row.Name)" >删除</el-button>
          </template>
        </el-table-column>
      </el-table>



      <el-drawer v-model="dialogFormVisible" size="60%" :before-close="handleClose" :show-close="false" >
        <template #header>
          <div class="flex justify-between items-center">
         
            <div>
              <el-button @click="closeDialog">取 消</el-button>
              <el-button  type="primary" @click="enterDialog" >确 定</el-button>
            </div>
          </div>
        </template>

        <el-form :model="formData" ref="vForm" label-position="left" label-width="150px"
        size="medium" @submit.prevent>
        <div class="static-content-item">
          <div>单列表单</div>
        </div>
        <div class="static-content-item">
          <el-divider direction="horizontal"></el-divider>
        </div>
        <el-form-item label="agent" prop="hosts" class="label-right-align">
          <el-select v-model="formData.hosts" class="full-width-input" clearable>
            <el-option v-for="(item, index) in agent_addr_list" :key="index" :label="item.agent_addr"
              :value="item.agent_addr" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="服务名" prop="Name" class="required label-right-align">
          <el-input v-model="formData.Name" type="text" clearable></el-input>
        </el-form-item>
        <el-form-item label="pid_of_port" prop="Portf" class="required label-right-align">
          <el-input v-model="formData.Portf" type="text" clearable></el-input>
        </el-form-item>
        <el-form-item label="pid_of_grep" prop="Grepf" class="required label-right-align">
          <el-input v-model="formData.Grepf" type="text" clearable></el-input>
        </el-form-item>
        <el-form-item label="环境变量" prop="Envs" class="label-right-align">
          <el-input v-model="formData.Envs" type="text" clearable></el-input>
        </el-form-item>
        <el-form-item label="工作目录" prop="Home" class="required label-right-align">
          <el-input v-model="formData.Home" type="text" clearable></el-input>
        </el-form-item>
        <el-form-item label="启动命令" prop="ExecStart" class="required label-right-align">
          <el-input v-model="formData.ExecStart" type="text" clearable></el-input>
        </el-form-item>
        <el-form-item label="自动启动" prop="AutoStart" class="label-right-align">
          <el-switch v-model="formData.AutoStart"></el-switch>
        </el-form-item>
         </el-form>
  
      </el-drawer>

    
    </div>
</template>


<script setup>
import Tag from 'primevue/tag';
import {
    deleteBaseAgent,
    createAgentTable,
    getAgentTableList,
} from '@/api/manager/manger'
import {
  getAgtSvcList,postAgtSvcAct,deleteAgtSvc,
} from '@/api/godcron/agtSvc'
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref,onMounted  } from 'vue'
const vForm = ref(null)
const formData = ref({
    Name : "",
    Portf : 0,
    Grepf : "",
    Envs : "",
    Home : "",
    ExecStart :"",
    AutoStart : false,
    hosts: "",
});

const getSeverity = (product) => {
    switch (product) {
        case true:
            return 'success';

        case false:
            return 'danger';

        case 'OUTOFSTOCK':
            return 'warn';

        default:
            return null;
    }
};

const agent_addr_list = ref([]);
// 查询agentList
const getAgentListData = async() => {
  const table = await getAgentTableList()
  if (table.code === 0) {
    agent_addr_list.value = table.data.list
  }
}
getAgentListData()

//////////////////////////////////////
const svcData = ref([]);
const hosts = ref(null);
const getAgentSvcList = async() => {
  //console.log(hosts)
  const table = await getAgtSvcList({hosts:hosts.value})
  if (table.code === 0) {
    svcData.value = table.data.list
  }
}

const delAgentSvc = async(host,name) => {
  //console.log({name:name,hosts:host})
  const table = await deleteAgtSvc({name:name,hosts:host})
  if (table.code === 0) {
    ElMessage({
          type: 'success',
          message: '删除成功!',
        });
    getAgentSvcList()
  }
}


// 关闭弹窗
const dialogFormVisible = ref(false)
const closeDialog = () => {
  dialogFormVisible.value = false
}
const addMenu = (id) => {
  // dialogTitle.value = '新增菜单'
  // form.value.parentId = id
  // isEdit.value = false
  // setOptions()
  dialogFormVisible.value = true
}

// 添加menu
//const hostsFrom = ref(null);
const enterDialog = async() => {
  vForm.value.validate(async(valid) => {
    if (valid) {
      //console.log(formData.value)
      let res = await postAgtSvcAct({action:"create",hosts:formData.value.hosts},formData.value)

      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '添加成功!',
        })
      }
      getAgentSvcList()
      dialogFormVisible.value = false
    }
  })
}

</script>