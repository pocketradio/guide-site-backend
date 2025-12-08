async function getIndex(req, res) {
    console.log("hi");
    res.send({ message: "hi" });
}

export default { getIndex };
