// 自动生成模板AgentTable
package manager

import (
	"vue-godcron/global"
)

// agent 结构体  AgentTable
type AgentTable struct {
	global.GVA_MODEL
	AgentAddr string `json:"agent_addr" form:"agent_addr" gorm:"uniqueIndex;column:agent_addr;comment:;" binding:"required"` //地址
	CreatedBy uint   `gorm:"column:created_by;comment:创建者"`
	UpdatedBy uint   `gorm:"column:updated_by;comment:更新者"`
	DeletedBy uint   `gorm:"column:deleted_by;comment:删除者"`
}

// TableName agent AgentTable自定义表名 agent_table
func (AgentTable) TableName() string {
	return "agent_table"
}
