const eventzonecorrect=7031


module.exports = function fixloadbug(dispatch){
	dispatch.hookOnce('S_LOAD_TOPO',1, event => {
		event.zone=eventzonecorrect
		return true
	})
}
