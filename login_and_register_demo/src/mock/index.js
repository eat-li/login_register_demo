import Mock from 'mockjs';

// 模拟登录接口
Mock.mock('/api/login', 'post', (req) => {
    const { account, password } = JSON.parse(req.body);

    // 模拟登录逻辑
    if (account === 'admin' && password === '123456') {
        return {
            code: 200,
            message: '登录成功',
            data: {
                token: Mock.Random.guid(), // 随机生成一个 token
                user: {
                    id: Mock.Random.guid(),
                    username: account,
                    role: 'admin'
                }
            }
        };
    } else {
        return {
            code: 400,
            message: '用户名或密码错误'
        };
    }
});

// 模拟注册接口
Mock.mock('/api/register', 'post', (req) => {
    const { account, password, repassword } = JSON.parse(req.body);

    // 模拟注册逻辑
    if (password !== repassword) {
        return {
            code: 400,
            message: '两次输入的密码不一致'
        };
    }

    // 模拟数据库中已存在该账号
    if (account === 'admin') {
        return {
            code: 400,
            message: '该账号已存在'
        };
    }

    return {
        code: 200,
        message: '注册成功',
        data: {
            user: {
                id: Mock.Random.guid(),
                username: account,
                role: 'user'
            }
        }
    };
});