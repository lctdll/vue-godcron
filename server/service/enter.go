package service

import (
	"vue-godcron/service/example"
	"vue-godcron/service/manager"
	"vue-godcron/service/system"
)

type ServiceGroup struct {
	SystemServiceGroup  system.ServiceGroup
	ExampleServiceGroup example.ServiceGroup
	ManagerServiceGroup manager.ServiceGroup
}

var ServiceGroupApp = new(ServiceGroup)
