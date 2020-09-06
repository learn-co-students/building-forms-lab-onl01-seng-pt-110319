export default function manageBand(state = {bands: [],}, action) {
  
	switch (action.type) {
		case 'ADD_BAND':
		const newName = {name: action.payload}
		return { ...state, bands: [...state.bands, newName] }

		
	default:
		return state
	}
};

