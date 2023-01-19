const GitHub = require('@octokit/rest')()

// Authenticate with GitHub
GitHub.authenticate({
    type: 'token',
    token: 'YOUR_ACCESS_TOKEN'
});

// Function to push the code to the repository
const pushCode = async (fileName, fileContent) => {
    try {
        await GitHub.repos.createFile({
            owner: 'OWNER_USERNAME',
            repo: 'REPO_NAME',
            path: fileName,
            message: 'Create new file',
            content: fileContent
        });
        console.log('Code pushed successfully!')
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    pushCode
}
