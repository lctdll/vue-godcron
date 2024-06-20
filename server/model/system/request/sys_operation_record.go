package request

import (
	"vue-godcron/model/common/request"
	"vue-godcron/model/system"
)

type SysOperationRecordSearch struct {
	system.SysOperationRecord
	request.PageInfo
}
