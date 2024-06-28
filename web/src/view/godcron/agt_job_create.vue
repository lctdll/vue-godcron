
<template>
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="150px" size="large" @submit.prevent>
    <div class="static-content-item">
      <div>多列表单</div>
    </div>
    <el-form-item label="agent" prop="hosts" class="label-right-align">
      <el-select v-model="formData.hosts" class="full-width-input" clearable>
        <el-option v-for="(item, index) in agent_addr_list" :key="index" :label="item.agent_addr"
          :value="item.agent_addr" :disabled="item.disabled"></el-option>
      </el-select>
    </el-form-item>
    <div class="static-content-item">
      <el-divider direction="horizontal"></el-divider>
    </div>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="name" prop="name" class="required label-right-align">
          <el-input v-model="formData.name" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="cron" prop="spec" class="required label-right-align">
          <el-input v-model="formData.spec" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="text" prop="text" class="required label-right-align">
          <el-input type="textarea" v-model="formData.text" rows="3"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <div class="static-content-item">
      <el-button round  @click="submitForm">提交</el-button>
    </div>
  </el-form>
  
</template>

<script setup>
import {
    deleteBaseAgent,
    createAgentTable,
    getAgentTableList,
} from '@/api/manager/manger'
import {
  addAgentJob,
} from '@/api/manager/mangjob'
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref  } from 'vue'


const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const searchInfo = ref({})
const vForm = ref(null)
const formData = reactive({
hosts: "",
exec:"bash",
action:"add",
name: "",
spec: "",
text: "",
})

const agent_addr_list = ref([])

const rules = reactive({
  path: [{ required: true, message: '请输入菜单name', trigger: 'blur' }],
  name:[{
            required: true,
            message: '字段值不可为空',
          }],
          spec: [{
            required: true,
            message: '字段值不可为空',
          }],
          text: [{
            required: true,
            message: '字段值不可为空',
          }],
  component: [{ required: true, message: '请输入文件路径', trigger: 'blur' }],
  'meta.title': [
    { required: true, message: '请输入菜单展示名称', trigger: 'blur' },
  ],
})
 
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



const initForm = () => {
  getAgentListData()

}
initForm()




const submitForm = () => {
  // Assuming vForm is the reference to your form component
  // You need to define it in the template and use it here
  //const vForm = ref(null);
  //console.log(formData);
  if (vForm.value) {
    // // 表单验证成功后的操作
    vForm.value.validate(async(valid) => {
      if (!valid) return;
      // TODO: 提交表单
      formData.action = "add"
      const res = await addAgentJob(formData)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '添加成功!',
        })
      }
      initForm()
    });
  }

}

const resetForm = () => {
  const vForm = ref(null);
  if (vForm.value) {
    vForm.value.resetFields();
  }
}

  
</script>

<style lang="scss">
  .el-input-number.full-width-input,
  .el-cascader.full-width-input {
    width: 100% !important;
  }
  
  .el-form-item--medium {
    .el-radio {
      line-height: 36px !important;
    }
    
    .el-rate {
      margin-top: 8px;
    }
  }
  
  .el-form-item--small {
    .el-radio {
      line-height: 32px !important;
    }
    
    .el-rate {
      margin-top: 6px;
    }
  }
  
  .el-form-item--mini {
    .el-radio {
      line-height: 28px !important;
    }
    
    .el-rate {
      margin-top: 4px;
    }
  }
  
  .clear-fix:before,
  .clear-fix:after {
    display: table;
    content: "";
  }
  
  .clear-fix:after {
    clear: both;
  }
  
  .float-right {
    float: right;
  }
  
</style>

<style lang="scss" scoped>
  div.table-container {
    table.table-layout {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;

      td.table-cell {
        display: table-cell;
        height: 36px;
        border: 1px solid #e1e2e3;
      }
    }
  }
  
  div.tab-container {}
  
  .label-left-align :deep(.el-form-item__label) {
    text-align: left;
  }
  
  .label-center-align :deep(.el-form-item__label) {
    text-align: center;
  }
  
  .label-right-align :deep(.el-form-item__label) {
    text-align: right;
  }
  
  .custom-label {}
  
  .static-content-item {
    min-height: 20px;
    display: flex;
    align-items: center;

    :deep(.el-divider--horizontal) {
      margin: 0;
    }
  }
  
</style>