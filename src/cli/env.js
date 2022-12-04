const parseEnv = () => {
    const env = process.env;
    const result = Object.entries(env).filter(([key, value]) => key.startsWith('RSS_'));
    result.forEach(([key, value]) => {
        console.log(`${key}=${value}`);
    });
};

parseEnv();
