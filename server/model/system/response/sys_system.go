package response

import "vue-godcron/config"

type SysConfigResponse struct {
	Config config.Server `json:"config"`
}
