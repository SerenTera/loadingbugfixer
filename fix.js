const eventzonecorrect=7031


module.exports = function fixloadbug(dispatch){
	dispatch.hook('S_LOAD_TOPO',1, event => {
		event.zone=eventzonecorrect
		return true
	})
}
