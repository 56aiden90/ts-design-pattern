// Generic Strategy Pattern
class Context {
    // Hide _strategy.
    private _strategy?: Strategy = undefined;

    // A setter for strategy.
    set strategy(strategy: Strategy) {
        this._strategy = strategy;
    }

    useStrategy: Function = (...args: any[]) => {
        // If a strategy is not set, throw an error.
        if (!this._strategy) throw new Error("Set Strategy");
        return this._strategy?.useStrategy(...args)
    }
}

interface Strategy {
    useStrategy: Function
}

class Sum implements Strategy {
    useStrategy: Function = (...args: number[]) => {
        // This strategy returns the sum of the arguments.
        return args.reduce((prev, cur) => prev + cur);
    }
}

class Factorial implements Strategy {
    useStrategy: Function = (...args: number[]) => {
        // This strategy returns the factorial of the arguments.
        return args.reduce((prev, cur) => prev * cur);
    }
}

const context = new Context();

context.strategy = new Sum();

console.log("Sum strategy", context.useStrategy(1, 2, 3, 4));

context.strategy = new Factorial();

console.log("Factorial strategy", context.useStrategy(1, 2, 3, 4));
