export default function validateParams(type, ...params) {
    params.forEach((param) => {
        if (param === undefined) {
            throw new Error(`missing required parameter`);
        }
        if (Object.prototype.toString.call(param).slice(8, -1).toLowerCase() !== type.toLowerCase()) {
            throw new Error(`parameter should be a/an ${type}`);
        }
    });
}

