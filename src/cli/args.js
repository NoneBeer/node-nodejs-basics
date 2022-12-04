const parseArgs = () => {
    const args = process.argv.slice(2);
    let result = [];
    for (let i = 0; i < args.length; i += 2) {
        const chunk = args.slice(i, i + 2);
        result.push(chunk)
    }
    result.forEach(([param, value]) => {
        console.log(`${param.slice(2)} is ${value}`)
    })
};

parseArgs();
