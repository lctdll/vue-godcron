package global

{{- if .HasGlobal }}

import "vue-godcron/plugin/{{ .Snake}}/config"

var GlobalConfig = new(config.{{ .PlugName}})
{{ end -}}