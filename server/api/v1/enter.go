package v1

import (
	"vue-godcron/api/v1/example"
	"vue-godcron/api/v1/godcron"
	"vue-godcron/api/v1/manager"
	"vue-godcron/api/v1/system"
)

type ApiGroup struct {
	SystemApiGroup  system.ApiGroup
	ExampleApiGroup example.ApiGroup
	ManagerApiGroup manager.ApiGroup
	GodcronApiGroup godcron.ApiGroup
}

var ApiGroupApp = new(ApiGroup)
