package request

import (
	"vue-godcron/model/common/request"
	"vue-godcron/model/system"
)

type SysDictionaryDetailSearch struct {
	system.SysDictionaryDetail
	request.PageInfo
}
