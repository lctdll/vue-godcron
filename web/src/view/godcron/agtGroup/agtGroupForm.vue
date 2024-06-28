<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="组名:" prop="group_name">
          <el-input v-model="formData.group_name" :clearable="true"  placeholder="请输入组名" />
       </el-form-item>
        <el-form-item label="agent地址:" prop="agent_addr_json">
          // 此字段为json结构，可以前端自行控制展示和数据绑定模式 需绑定json的key为 formData.agent_addr_json 后端会按照json的类型进行存取
          {{ formData.agent_addr_json }}
       </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {
  createAgtGroup,
  updateAgtGroup,
  findAgtGroup
} from '@/api/godcron/agtGroup'

defineOptions({
    name: 'AgtGroupForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'

const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            group_name: '',
            agent_addr_json: {},
        })
// 验证规则
const rule = reactive({
               group_name : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               agent_addr_json : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findAgtGroup({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.reagtgroup
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createAgtGroup(formData.value)
               break
             case 'update':
               res = await updateAgtGroup(formData.value)
               break
             default:
               res = await createAgtGroup(formData.value)
               break
           }
           if (res.code === 0) {
             ElMessage({
               type: 'success',
               message: '创建/更改成功'
             })
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>
