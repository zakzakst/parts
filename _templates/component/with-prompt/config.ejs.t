---
to: 'src/components/<%= component_type %>s/<%= component_type %><%= number %>/<%= component_type %><%= number %>.config.yml'
---
<%
var title = ''
switch ( component_type ) {
  case 'accordion':
    title = 'アコーディオン'
    break
  case 'button':
    title = 'ボタン'
    break
  case 'card':
    title = 'カード'
    break
  case 'carousel':
    title = 'カルーセル'
    break
  case 'contact':
    title = 'コンタクト'
    break
  case 'faq':
    title = 'よくある質問'
    break
  case 'footer':
    title = 'フッター'
    break
  case 'form':
    title = 'フォーム'
    break
  case 'heading':
    title = '見出し'
    break
  case 'hero':
    title = 'ヒーロー'
    break
  case 'loader':
    title = 'ローダー'
    break
  case 'menu':
    title = 'メニュー'
    break
  case 'modal':
    title = 'モーダル'
    break
  case 'news-list':
    title = 'ニュースリスト'
    break
  case 'other':
    title = 'その他'
    break
  case 'scroll-anim':
    title = 'スクロールアニメーション'
    break
  case 'section':
    title = 'セクション'
    break
  case 'service-list':
    title = 'サービスリスト'
    break
  case 'start-anim':
    title = 'スタートアニメーション'
    break
  case 'utility':
    title = 'ユーティリティ'
    break
  default:
    title = 'コンポーネント';
}
%>
title: <%= title %><%= number %>
label: <%= title %><%= number %>
variants:
  - name: default
    label: <%= title %><%= number %>
    status: ready
    # status: prototype
    # status: wip
    # hidden: true
context:
  link: '#'
  text: '<%= title %><%= number %>'
<% if (component_type === 'scroll-anim') { %>
preview: '@preview-scroll'
<% } %>
