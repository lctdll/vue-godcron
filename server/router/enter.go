package router

import (
	"vue-godcron/router/example"
	"vue-godcron/router/manager"
	"vue-godcron/router/system"
)

type RouterGroup struct {
	System  system.RouterGroup
	Example example.RouterGroup
	Manager manager.RouterGroup
}

var RouterGroupApp = new(RouterGroup)
