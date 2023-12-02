---
to: 'src/components/<%= component_type %>s/<%= component_type %><%= number %>/<%= component_type %><%= number %>.config.yml'
---
<%
var title = ''
switch ( component_type ) {
  case 'button':
    title = 'ボタン'
    break
  case 'other':
    title = 'その他'
    break
  case 'scroll-anim':
    title = 'スクロールアニメーション'
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
