# AICP

AICP 闭环赋能体系宣传网站与相关素材。

## 网站入口

- 本地页面：`website/index.html`
- 已部署访问：<http://47.102.216.22/aicp/>

## 目录说明

- `website/`：宣传网站页面、样式与交互脚本
- `image/`：网站使用的核心场景图片
- `video/generated/hero/`：首页 Hero 背景视频
- `video/client_review/`：宣传片预览视频
- `video/seedance2_aicp_refs/`：视频与页面参考素材
- `AICP平台202604.pdf`：AICP 平台资料

## 访问控制

线上 `/aicp/` 当前支持两种接入方式：

- IP 白名单接入：服务器 `/etc/nginx/aicp_ip_allow.conf`
- 授权码接入：访问 `/aicp-auth/`，输入 `AICP`
