package service

import (
	gservice "vue-godcron/godcron/service"
	"vue-godcron/service/example"
	"vue-godcron/service/manager"
	"vue-godcron/service/system"
)

type ServiceGroup struct {
	SystemServiceGroup  system.ServiceGroup
	ExampleServiceGroup example.ServiceGroup
	ManagerServiceGroup manager.ServiceGroup
	GodcronServiceGroup gservice.AgtGroupService
}

var ServiceGroupApp = new(ServiceGroup)
