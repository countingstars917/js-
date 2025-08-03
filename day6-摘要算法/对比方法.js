// 1. 修复加密函数 (替代原a函数)
function createHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return Math.abs(hash).toString();
}

// 2. 模拟令牌存储 (替代原c函数)
const tokenStorage = {
    get: (key) => {
        return localStorage.getItem(key) || "test_token_value";
    }
};

// 3. 参数序列化函数
function m(t) {
    const e = new URLSearchParams();
    let n = true;
    let r = false;
    let i;

    try {
        const entries = Object.entries(t);
        for (const [key, value] of entries) {
            e.append(key, value === void 0 ? "" : value);
        }
    } catch (f) {
        r = true;
        i = f;
        if (r) throw new Error("Param serialization failed");
    }

    return e.toString();
}

// 4. 对象属性设置函数
function f(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
    }) : t[e] = n,
    t;
}

// 5. 对象合并函数 (修复key错误)
function o(t) {
    for (let e = 1; e < arguments.length; e++) {
        const n = arguments[e] || {};
        const keys = Object.keys(n);

        if (typeof Object.getOwnPropertySymbols === "function") {
            const symbols = Object.getOwnPropertySymbols(n).filter(
                sym => Object.getOwnPropertyDescriptor(n, sym).enumerable
            );
            keys.push(...symbols);
        }

        keys.forEach(key => {
            f(t, key, n[key]); // 使用动态key替代硬编码的last_id
        });
    }
    return t;
}

// 6. 参数生成函数 (替代原b函数)
function b(t) {
    const e = Date.now().toString();

    return {
        code: createHash(e + "9527" + e.slice(0, 6)),
        timestamp: e,
        platform: "web_pc",
        v: "0.1.0",
        mytoken: t !== null && t !== void 0 ? t : tokenStorage.get("mytoken_sid")
    };
}

// 7. 原始请求参数
let e = {
    "pages": "6,1",
    "sizes": "100,100",
    "subject": "market_cap",
    "language": "zh_CN",
    "legal_currency": "USD"
};

// 8. 组合参数并生成URL参数字符串
const h = m(o({}, e, b(null)));
console.log("最终生成的URL参数:", h);