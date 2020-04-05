/**
 * @description This emulates the OP's async function which has been observed to return a valid 
 * object in the form of an array. 
 */
const roles = async () => {
	return new Promise((resolve, reject) =>
		setTimeout(() => resolve({ roleData: [] }), 200)
	);
}

/**
 * @description This simulates the OP's EXACT Code and notes the issues
 */

/** executing this function does nothing since the result is not assigned to anything */
roles();

/**
 * The exact data type of the module.exports here is 
 * {
 * 	roles : () => Promise<any>
 * }
 */
module.exports = {
	roles: roles
}