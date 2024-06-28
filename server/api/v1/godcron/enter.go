package godcron

import "gitee.com/LCTDDL/MYCODE/Lnet/hcli"

type ApiGroup struct {
	AgtGroupApi
	AgtServiceApi
}

var hc = hcli.NewCli()
