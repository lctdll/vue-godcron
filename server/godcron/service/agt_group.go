package godcron

import (
	"gitee.com/LCTDDL/MYCODE/utils/LAlgorithm/bcrypt"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"vue-godcron/global"
	"vue-godcron/godcron/model"
	godcronReq "vue-godcron/godcron/model/request"
)

type AgtGroupService struct {
}

// CreateAgtGroup 创建AgtGroup记录
// Author [piexlmax](https://github.com/piexlmax)
func (agtgroupService *AgtGroupService) CreateAgtGroup(agtgroup *godcron.AgtGroup) (err error) {
	err = global.GVA_DB.Create(agtgroup).Error
	return err
}

// CreateAgtGroup 创建AgtGroup记录
// Author [piexlmax](https://github.com/piexlmax)
func (agtgroupService *AgtGroupService) CreateAgtListGroup(Gname string, agts []string, CreatedBy uint) (err error) {
	global.GVA_DB.Clauses(clause.OnConflict{DoNothing: true}).Create(&godcron.AgtGroup{Group_name: Gname, Agent_addr_json: []byte("{}"), CreatedBy: CreatedBy})
	global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		for _, addr := range agts {
			addrmd5 := bcrypt.MD5([]byte(addr))
			err = tx.Model(&godcron.AgtGroup{}).Where(&godcron.AgtGroup{Group_name: Gname, CreatedBy: CreatedBy}).Update("agent_addr_json", gorm.Expr("json_set(agent_addr_json, ?, ?)", "$."+addrmd5, addr)).Error
			if err != nil {
				return err
			}
		}
		return nil
	})

	return err
}

// DeleteAgtGroup 删除AgtGroup记录
// Author [piexlmax](https://github.com/piexlmax)
func (agtgroupService *AgtGroupService) DeleteAgtGroup(ID string, userID uint) (err error) {
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		if err := tx.Model(&godcron.AgtGroup{}).Where("id = ?", ID).Update("deleted_by", userID).Error; err != nil {
			return err
		}
		if err = tx.Unscoped().Delete(&godcron.AgtGroup{}, "id = ?", ID).Error; err != nil {
			return err
		}
		return nil
	})
	return err
}

// DeleteAgtGroupByIds 批量删除AgtGroup记录
// Author [piexlmax](https://github.com/piexlmax)
func (agtgroupService *AgtGroupService) DeleteAgtGroupByIds(IDs []string, deleted_by uint) (err error) {
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		if err := tx.Model(&godcron.AgtGroup{}).Where("id in ?", IDs).Update("deleted_by", deleted_by).Error; err != nil {
			return err
		}
		if err := tx.Unscoped().Where("id in ?", IDs).Delete(&godcron.AgtGroup{}).Error; err != nil {
			return err
		}
		return nil
	})
	return err
}

// UpdateAgtGroup 更新AgtGroup记录
// Author [piexlmax](https://github.com/piexlmax)
func (agtgroupService *AgtGroupService) UpdateAgtGroup(agtgroup godcron.AgtGroup) (err error) {
	err = global.GVA_DB.Model(&godcron.AgtGroup{}).Where("id = ?", agtgroup.ID).Updates(&agtgroup).Error
	return err
}

// GetAgtGroup 根据ID获取AgtGroup记录
// Author [piexlmax](https://github.com/piexlmax)
func (agtgroupService *AgtGroupService) GetAgtGroup(ID string) (agtgroup godcron.AgtGroup, err error) {
	err = global.GVA_DB.Where("id = ?", ID).First(&agtgroup).Error
	return
}

// GetAgtGroupInfoList 分页获取AgtGroup记录
// Author [piexlmax](https://github.com/piexlmax)
func (agtgroupService *AgtGroupService) GetAgtGroupInfoList(info godcronReq.AgtGroupSearch) (list []godcron.AgtGroup, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&godcron.AgtGroup{})
	var agtgroups []godcron.AgtGroup
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

	err = db.Find(&agtgroups).Error
	return agtgroups, total, err
}
