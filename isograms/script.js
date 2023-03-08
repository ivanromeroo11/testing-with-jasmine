class CustomArray {
    constructor(...args) {
        this.list = new Array()
        if(args.length) this.add(...args)

        const add = { value: this.add.bind(this) }
        const has = { value: this.has.bind(this) }
        const size = { get: this.size.bind(this) }
        const compareWith = { value: this.compareWith.bind(this) }
        Object.defineProperties(this.list, { add, has, size, compareWith })

        return this.list
    }

    has(value) {
        return this.list.includes(value)
    }

    add(...args) {
        for(let i = -1; ++i < args.length;)
            !this.has(args[i]) && this.list.push(args[i])

        return this.list
    }

    size() {
        return this.list.length
    }

    compareWith(list) {
        return this.size() === list?.length
    }
}

class CoolerArray extends Array {
    constructor(...args) {
        super()
        this.add(...args)
    }

    has(value) {
        return this.includes(value)
    }

    add(...args) {
        for(let i = -1; ++i < args.length;) {
            !this.has(args[i]) && this.push(args[i])
        }
        return this
    }

    get size() {
        return this.length
    }
}

const isIsogram = function (str = "") {
    const lower = str.toLowerCase();
    const ocurrences = {};

    for (let i = -1; ++i < lower.length; ) {
      const letter = lower[i];
      if (ocurrences[letter]) return false;
      ocurrences[letter] = 1;
    }

    return true;
};
