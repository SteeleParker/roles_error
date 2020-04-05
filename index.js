/**
 * @description Purpose of this file is to demonstrate the error being observed at 
 * https://www.facebook.com/groups/359999434098189/?post_id=2677522839012492 and propose a solution
 */

const roles = require("./roles");
/**
 * @description Destructuring can be used, however the OP did not use it
 */
const { roles: destructuredRoles } = require("./roles");

const performTest = async () => {
	/**
	 * @description This simulates the OPs exact code
	 * 
	 * it outputs the module object, with the function roles
	 */
	console.log("______________________");
	/**
	 * Output:
	 * { roles: [AsyncFunction: roles] }
	 */
	console.log(roles);
	console.log("______________________");

	/**
	 * @description The solution to your problem
	 */
	console.log("______________________"); /**
	* Output:
	* { roleData: [] }
	*/
	console.log(await roles.roles());
	console.log("______________________");

	console.log("______________________");
	/**
	 * Destructuring example
	* Output:
	* { roleData: [] }
	*/
	console.log(await destructuredRoles());
	console.log("______________________");
}

performTest();