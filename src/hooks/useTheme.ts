"use client";
import { useState } from 'react';

// 定义 theme 类型
type Theme = 'light' | 'dark';

export const useTheme = (): { theme: Theme; toggleTheme: () => void } => {
    const [theme, setTheme] = useState<Theme>('light');

    /*     useEffect(() => {
            // 检查用户是否有存储的主题
            const savedTheme = localStorage.getItem('theme') as Theme | null;
            if (savedTheme) {
                setTheme(savedTheme);
                document.documentElement.classList.add(savedTheme);
            } else {
                // 默认使用系统的主题
                const systemTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                setTheme(systemTheme);
                document.documentElement.classList.add(systemTheme);
            }
        }, []); */

    const toggleTheme = (): void => {
        const newTheme: Theme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        // 更新 LocalStorage
        localStorage.setItem("theme", newTheme);

        // 更新 HTML 标签的 class
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
    };

    return { theme, toggleTheme };
};
