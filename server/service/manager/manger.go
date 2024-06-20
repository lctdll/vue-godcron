package manager

import (
	"gorm.io/gorm"
	"vue-godcron/global"
	"vue-godcron/model/manager"
	managerReq "vue-godcron/model/manager/request"
)

type AgentTableService struct {
}

// CreateAgentTable 创建agent记录
// Author [piexlmax](https://github.com/piexlmax)
func (agentService *AgentTableService) CreateAgentTable(agent *manager.AgentTable) (err error) {
	err = global.GVA_DB.Create(agent).Error
	return err
}

// DeleteAgentTable 删除agent记录
// Author [piexlmax](https://github.com/piexlmax)
func (agentService *AgentTableService) DeleteAgentTable(ID string, userID uint) (err error) {
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		if err := tx.Model(&manager.AgentTable{}).Where("id = ?", ID).Update("deleted_by", userID).Error; err != nil {
			return err
		}
		if err = tx.Delete(&manager.AgentTable{}, "id = ?", ID).Error; err != nil {
			return err
		}
		return nil
	})
	return err
}

// DeleteAgentTableByIds 批量删除agent记录
// Author [piexlmax](https://github.com/piexlmax)
func (agentService *AgentTableService) DeleteAgentTableByIds(IDs []string, deleted_by uint) (err error) {
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		if err := tx.Model(&manager.AgentTable{}).Where("id in ?", IDs).Update("deleted_by", deleted_by).Error; err != nil {
			return err
		}
		if err := tx.Where("id in ?", IDs).Delete(&manager.AgentTable{}).Error; err != nil {
			return err
		}
		return nil
	})
	return err
}

// DeleteAgentTableByAddress 批量删除agent记录
// Author [piexlmax](https://github.com/piexlmax)
func (agentService *AgentTableService) DeleteAgentTableByAddress(addr string) (err error) {
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		//if err := tx.Model(&manager.AgentTable{}).Where("agent_addr = ?", addr).Update("deleted_by", deleted_by).Error; err != nil {
		//	return err
		//}
		if err := tx.Unscoped().Where("agent_addr = ?", addr).Delete(&manager.AgentTable{}).Error; err != nil {
			return err
		}
		return nil
	})
	return err
}

// UpdateAgentTable 更新agent记录
// Author [piexlmax](https://github.com/piexlmax)
func (agentService *AgentTableService) UpdateAgentTable(agent manager.AgentTable) (err error) {
	err = global.GVA_DB.Model(&manager.AgentTable{}).Where("id = ?", agent.ID).Updates(&agent).Error
	return err
}

// GetAgentTable 根据ID获取agent记录
// Author [piexlmax](https://github.com/piexlmax)
func (agentService *AgentTableService) GetAgentTable(ID string) (agent manager.AgentTable, err error) {
	err = global.GVA_DB.Where("id = ?", ID).First(&agent).Error
	return
}

// GetAgentTableInfoList 分页获取agent记录
// Author [piexlmax](https://github.com/piexlmax)
func (agentService *AgentTableService) GetAgentTableInfoList(info managerReq.AgentTableSearch) (list []manager.AgentTable, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&manager.AgentTable{})
	var agents []manager.AgentTable
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.StartCreatedAt != nil && info.EndCreatedAt != nil {
		db = db.Where("created_at BETWEEN ? AND ?", info.StartCreatedAt, info.EndCreatedAt)
	}
	err = db.Count(&total).Error
	if err != nil {
		return
	}

	if limit != 0 {
		db = db.Limit(limit).Offset(offset)
	}

	err = db.Find(&agents).Error
	return agents, total, err
}
