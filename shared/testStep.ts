export class TestStep {
    private steps: string[];

    constructor() {
        this.steps = [];
    }

    async log<T>(step: Promise<T> | T, description: string): Promise<T> {
        try {
            const resolvedStep = await Promise.race([
                Promise.resolve(step),
                new Promise<T>((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
            ]);
            const status = 'PASSED';
            this.steps.push(`${description} - ${status}`);
            return resolvedStep;
        } catch (error) {
            const status = `FAILED: ${error.message}`;
            this.steps.push(`${description} - ${status}`);
            throw error;
        }
    }

    getSteps(): string[] {
        return this.steps;
    }
}