'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ja' | 'en' | 'zh';

interface TranslationData {
    [key: string]: {
        [K in Language]: string;
    };
}

const translations: TranslationData = {
    home: { ja: 'ホーム', en: 'Home', zh: '首页' },
    expertise: { ja: '専門知識', en: 'Expertise', zh: '专业领域' },
    projects: { ja: 'プロジェクト', en: 'Projects', zh: '项目' },
    skills: { ja: 'スキル', en: 'Skills', zh: '技能' },
    philosophy: { ja: '理念', en: 'Philosophy', zh: '理念' },
    downloads: { ja: 'ダウンロード', en: 'Downloads', zh: '下载' },
    contact: { ja: 'お問い合わせ', en: 'Contact', zh: '联系' },
    hireMe: { ja: '採用する', en: 'Hire Me', zh: '联系我' },
    searchArchive: { ja: 'アーカイブを検索...', en: 'Search archive...', zh: '搜索存档...' },
    heroTitlePrefix: { ja: 'maa | AI/ML Engineer & VIDEO/SOUND Creator', en: 'maa | AI/ML Engineer & VIDEO/SOUND Creator', zh: 'maa | AI/ML Engineer & VIDEO/SOUND Creator' },
    heroTitleSuffix: { ja: 'シネマティクス', en: 'CINEMATICS', zh: '电影艺术' },
    heroSubtitle: {
        ja: 'AI/MLエンジニア・映像・音響クリエイター',
        en: 'AI/ML Engineer & VIDEO/SOUND Creator',
        zh: 'AI/ML工程师・影像・音响创作者'
    },
    explorePortfolio: { ja: 'ポートフォリオを見る', en: 'Explore Portfolio', zh: '探索作品集' },
    initiateUplink: { ja: '通信開始', en: 'Initiate UPLINK', zh: '启动连接' },
    technicalArtifacts: { ja: '技術成果物', en: 'TECHNICAL ARTIFACTS', zh: '技术产物' },
    artifactsDesc: { ja: 'AI/ML、シネマトグラフィ、自動化における主要な作品。', en: 'Selected works in AI/ML, cinematography, and automation.', zh: '在 AI/ML、电影制作和自动化领域的精选作品。' },
    decryptLog: { ja: 'ログを解読', en: 'Decrypt_Log', zh: '解密日志' },
    systemCapabilities: { ja: 'システム能力', en: 'SYSTEM CAPABILITIES', zh: '系统能力' },
    neuralArchitecture: { ja: 'ニューラルアーキテクチャと技術習熟度の概要。', en: 'Neural architecture and technical proficiency overview.', zh: '神经架构及技术熟练度概览。' },
    systemStatus: { ja: 'システムステータス', en: 'System Status', zh: '系统状态' },
    coreEngine: { ja: 'コアエンジン: 稼働中', en: 'Core_Engine: Operational', zh: '核心引擎: 运行中' },
    uptime: { ja: '稼働時間', en: 'Uptime', zh: '运行时间' },
    latency: { ja: 'レイテンシ', en: 'Latency', zh: '延迟' },
    nodes: { ja: 'ノード', en: 'Nodes', zh: '节点' },
    connected: { ja: '接続済み', en: 'Connected', zh: '已连接' },
    initiateProtocol: { ja: 'プロトコル開始', en: 'Initiate Protocol', zh: '启动协议' },
    confirmTransmission: { ja: '送信確認', en: 'Confirm_Transmission', zh: '确认传输' },
    encryption: { ja: '暗号化', en: 'ENCRYPTION', zh: '加密' },
    listening: { ja: '待機中', en: 'LISTENING', zh: '监听中' },
    returnToNexus: { ja: 'ネクサスに戻る', en: 'return_to_nexus', zh: '返回枢纽' },
    prevNode: { ja: '前のノード', en: 'Prev_Node', zh: '上一个节点' },
    nextNode: { ja: '次のノード', en: 'Next_Node', zh: '下一个节点' },
    syncComplete: { ja: '同期完了', en: 'SYNC_COMPLETE', zh: '同步完成' },
    username: { ja: 'ユーザー名', en: 'USERNAME', zh: '用户名' },
    emailCoordinates: { ja: 'メールアドレス', en: 'EMAIL_ADDRESS', zh: '邮箱地址' },
    dataPayload: { ja: '本文', en: 'MESSAGE', zh: '信息' },
    decryptingFrontier: { ja: 'AI/MLエンジニアリングの最前線を解読する', en: 'Decrypting the frontier of AI/ML engineering', zh: '解读 AI/ML 工程的前沿' },
    searchDataStreams: { ja: 'データストリームを検索...', en: 'Search Data Streams...', zh: '搜索数据流...' },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('language') as Language;
            if (saved && ['ja', 'en', 'zh'].includes(saved)) {
                return saved;
            }
        }
        return 'ja';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string) => {
        return translations[key]?.[language] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
