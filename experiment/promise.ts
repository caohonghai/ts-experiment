const valid = async () => {
    const promise: Promise<number>[] = [
        Promise.reject(33),
        Promise.resolve(44),
    ];
    let valid = true;
    await Promise.all(promise)
        .then(res => {
            console.log(res);
        })
        .catch(() => {
            valid = false;
        });
    return valid;
};

valid().then(res => {
    console.log(res);
});
