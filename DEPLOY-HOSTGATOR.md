# 🚀 Guia de Deploy - HostGator (Plano M)

## 📋 Pré-requisitos
- ✅ Plano M da HostGator
- ✅ Acesso ao cPanel
- ✅ Node.js instalado localmente (para build)
- ✅ Domínio enillumina.com.br configurado

---

## 🔧 Passo 1: Configurar o Projeto para Exportação Estática

O `next.config.ts` já foi configurado com:
```typescript
output: "export"  // Gera HTML estático
images: { unoptimized: true }  // Otimização de imagens desabilitada para hospedagem estática
trailingSlash: true  // URLs com / no final (compatível com Apache)
```

---

## 🏗️ Passo 2: Build do Projeto

Execute no terminal:

```bash
npm run build
```

Isso vai criar uma pasta `out/` com todos os arquivos estáticos HTML, CSS, JS e imagens.

---

## 📤 Passo 3: Upload para HostGator

### Opção A: Via Gerenciador de Arquivos (cPanel)

1. **Acesse o cPanel** da HostGator
2. Vá em **Gerenciador de Arquivos**
3. Navegue até a pasta `public_html/`
4. **Delete tudo** que estiver dentro (arquivos padrão da HostGator)
5. **Clique em "Upload"**
6. Selecione **TODOS os arquivos** da pasta `out/` do seu projeto
7. Aguarde o upload completar (pode demorar devido às imagens)

### Opção B: Via FTP (Recomendado para arquivos grandes)

1. **Baixe um cliente FTP**: [FileZilla](https://filezilla-project.org/)
2. **Conecte via FTP**:
   - Host: `ftp.enillumina.com.br` (ou IP fornecido pela HostGator)
   - Usuário: seu username do cPanel
   - Senha: sua senha do cPanel
   - Porta: 21
3. **Navegue até** `public_html/`
4. **Delete tudo** que estiver lá
5. **Arraste todos os arquivos** da pasta `out/` para `public_html/`

---

## ⚙️ Passo 4: Configurar .htaccess (Importante!)

Crie um arquivo `.htaccess` na raiz de `public_html/` com o seguinte conteúdo:

```apache
# Redirecionar www para não-www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.enillumina\.com\.br$ [NC]
RewriteRule ^(.*)$ https://enillumina.com.br/$1 [R=301,L]

# Forçar HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Página 404 personalizada
ErrorDocument 404 /404.html

# Compressão GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache de arquivos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Segurança
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Evitar listagem de diretórios
Options -Indexes
```

**Como criar via cPanel:**
1. Vá em **Gerenciador de Arquivos**
2. Clique em **+ Arquivo**
3. Nome: `.htaccess`
4. Clique direito → **Editar**
5. Cole o conteúdo acima
6. Salve

---

## 🌐 Passo 5: Configurar DNS (Se necessário)

Se o domínio `enillumina.com.br` ainda não aponta para a HostGator:

1. Acesse o painel do **Registro.br** (ou onde o domínio foi registrado)
2. Configure os **Nameservers** para:
   ```
   ns1.hostgator.com.br
   ns2.hostgator.com.br
   ```
3. Aguarde **24-48h** para propagação

---

## 📧 Passo 6: Configurar SSL (HTTPS)

1. No cPanel, vá em **SSL/TLS Status**
2. Procure por `enillumina.com.br`
3. Clique em **Run AutoSSL** (gratuito)
4. Aguarde 5-10 minutos

Ou use **Let's Encrypt** (também gratuito):
1. cPanel → **SSL/TLS** → **Manage SSL Sites**
2. Selecione o domínio
3. Clique em **Install SSL Certificate**

---

## ✅ Passo 7: Verificação Final

Acesse: `https://enillumina.com.br`

**Checklist:**
- [ ] Site carrega corretamente
- [ ] HTTPS está ativo (cadeado verde)
- [ ] Todas as imagens aparecem
- [ ] Links internos funcionam (#inicio, #sobre, etc.)
- [ ] Formulário de contato funciona
- [ ] Selo SiteLock aparece no footer
- [ ] Site responsivo (teste no mobile)

---

## 🔄 Atualizações Futuras

Sempre que fizer alterações no site:

1. Execute `npm run build` localmente
2. Faça upload **apenas dos arquivos alterados** da pasta `out/`
3. Limpe o cache do navegador (Ctrl+Shift+R)

---

## 📊 Otimizações Adicionais (Opcional)

### Cloudflare (CDN Gratuito)
1. Crie conta em [cloudflare.com](https://cloudflare.com)
2. Adicione o domínio `enillumina.com.br`
3. Configure os nameservers do Cloudflare no Registro.br
4. Ative **Always Use HTTPS** e **Auto Minify**

### Google Analytics
Já configurado no projeto via Next.js. Adicione o ID de tracking em `src/app/layout.tsx` se necessário.

---

## 🆘 Problemas Comuns

### 1. Imagens não aparecem
- ✅ Verifique se a pasta `_next/static/media/` foi enviada
- ✅ Cheque permissões (755 para pastas, 644 para arquivos)

### 2. Links não funcionam
- ✅ Verifique se o `.htaccess` foi criado
- ✅ Confirme que `trailingSlash: true` está no `next.config.ts`

### 3. SSL não ativa
- ✅ Aguarde 24h após configuração do domínio
- ✅ Force HTTPS no `.htaccess` (já incluído acima)

### 4. Site lento
- ✅ Ative Cloudflare CDN
- ✅ Otimize imagens com [TinyPNG](https://tinypng.com/)
- ✅ Verifique cache do `.htaccess`

---

## 📞 Suporte HostGator

- 📧 Email: suporte@hostgator.com.br
- 💬 Chat: disponível 24/7 no painel
- 📱 WhatsApp: +55 (48) 3047-0810

---

## ✨ Pronto!

Seu site estará online em: **https://enillumina.com.br** 🎉

---

*Última atualização: 31 de Outubro de 2025*
