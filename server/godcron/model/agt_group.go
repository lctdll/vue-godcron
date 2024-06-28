// 自动生成模板AgtGroup
package godcron

import (
	"vue-godcron/global"

	"gorm.io/datatypes"
)

// AgtGroup 结构体  AgtGroup
type AgtGroup struct {
	global.GVA_MODEL
	Group_name      string         `json:"group_name" form:"group_name" gorm:"uniqueIndex;column:group_name;comment:;" binding:"required"`                                  //组名
	Agent_addr_json datatypes.JSON `json:"agent_addr_json" form:"agent_addr_json" gorm:"column:agent_addr_json;comment:;type:text;" binding:"required"swaggertype:"object"` //agent地址
	CreatedBy       uint           `gorm:"column:created_by;comment:创建者"`
	UpdatedBy       uint           `gorm:"column:updated_by;comment:更新者"`
	DeletedBy       uint           `gorm:"column:deleted_by;comment:删除者"`
}

// TableName AgtGroup AgtGroup自定义表名 AgtGroup
func (AgtGroup) TableName() string {
	return "AgtGroup"
}
