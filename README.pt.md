# Teste Técnico – Jr Backend / DevOps

### Contexto  
Neste teste, você irá simular uma tarefa real de DevOps antes de aplicar mudanças em um banco de dados de produção:  
**fazer um backup e depois atualizar o esquema**.  
Tudo deve rodar **localmente**.

---

## O que você receberá

Você receberá o **arquivo modelo inicial chamado `template.js`** que deverá completar.

---

### Objetivo  
Crie um script usando **qualquer linguagem de script que preferir** (Node.js, Python, Bash, etc.) que execute automaticamente o seguinte fluxo:

1. **Fazer backup do banco de dados**  
   - Ler o arquivo `database.sql` (dump simulado do banco).  
   - Comprimir em formato `.zip`.  
   - Salvar na pasta `/backups` com o nome:  
     ```
     backup_YYYYMMDD_HHMM.sql.zip
     ```  
   - Exibir no console:  
     ```
     Backup gerado: backups/backup_20250808_1030.sql.zip (15 KB)
     ```

2. **Atualizar o esquema do banco de dados** (escolha uma das duas abordagens abaixo)

   **Opção A: Usando um banco MySQL local**  
   - Conectar em um banco **MySQL** local.  
   - Ler e executar os comandos do arquivo `schema_update.sql`.  
   - Salvar um log em `schema_update.log`:  
     ```
     [YYYY-MM-DD HH:MM:SS] Aplicado schema_update.sql - SUCESSO
     ```  
     ou em caso de erro:  
     ```
     [YYYY-MM-DD HH:MM:SS] Aplicado schema_update.sql - ERRO: <mensagem>
     ```

   **Opção B: Simulação total (sem banco real)**  
   - Ler o arquivo `schema_update.sql` (texto puro com comandos SQL).  
   - Simular a aplicação de cada comando SQL:  
     - Parsear o arquivo linha a linha ou comando a comando.  
     - Escrever uma entrada de log em `schema_update.log` para cada comando:  
       ```
       [YYYY-MM-DD HH:MM:SS] Aplicado: <comando SQL>
       ```  
     - Se o arquivo estiver vazio ou ausente, escrever uma entrada de erro no log.

3. **Regras do fluxo**  
   - Se o **backup falhar**, **não** execute a atualização do esquema.  
   - Se os dois passos forem bem-sucedidos, exiba:  
     ```
     Backup: OK
     Atualização do esquema: OK
     ```

---

### Requisitos adicionais  
- Tratar erros com cuidado e registrar logs corretamente.  
- Usar timestamps em todas as entradas de log.  
- Usar apenas arquivos locais; **não são necessários serviços externos ou em nuvem**.  
- Opcionalmente, usar variáveis de ambiente para caminhos configuráveis.

---

### Arquivos fornecidos  
- /database.sql # Dump simulado do banco (texto puro)  
- /schema_update.sql # Comandos SQL para atualização do esquema (texto puro)  
- /backups/ # Diretório para salvar backups  
- template.js # Template do código que deve ser implementado

---

### Critérios de avaliação  
- Backup criado e comprimido corretamente.  
- Execução ou simulação da atualização do esquema com logging correto.  
- Código limpo, legível e com tratamento de erros.  
- Saída clara no console mostrando sucesso ou falha.  
- Formatação correta dos timestamps e nomes dos arquivos.
