import { useRouterStore } from '~/stores/router'

export interface Setup {
  nr_clinux: string
  nr_banco: number
  cd_convenio_particular: Nullable<number>
  cd_empresa: number
  cd_empresa_matriz: Nullable<number>
  sn_dicomvix_filme: boolean
  sn_dicomvix_dicom: boolean
  sn_dicomvix_wado: boolean
  sn_dicomvix_laudo: boolean
  sn_dicomvix_edit: boolean
  sn_dicomvix_scan: boolean
  ds_dicomvix_filme: string
  ds_dicomvix_dicom: string
  ds_dicomvix_windir: Nullable<string>
  ds_dicomvix_weasis: string
  ds_dicomvix_osirix: string
  ds_dicomvix_fluxo: Nullable<string>
  ds_dicomvix_fonte: string
  ds_dicomvix_tema: string
  ds_dicomvix_title: string
  sn_dicomvix_consultorio: boolean
  sn_dicomvix_repasse: boolean
  sn_laudo_grupo: boolean
  sn_laudo_revisao: boolean
  ds_zenvia_user: Nullable<string>
  ds_rcx_user: string
  nr_agenda_scanner: number
  sn_agenda_documento: boolean
  sn_agenda_agendamento: boolean
  sn_agenda_resultado: boolean
  sn_agenda_empresa: boolean
  sn_agenda_particular: boolean
  sn_agenda_imagem: boolean
  sn_agenda_dicom: boolean
  sn_agenda_laudo: boolean
  sn_agenda_fiscal: boolean
  sn_agenda_passo: boolean
  ds_dicomvix_alert: Nullable<string>
  sn_agenda_consultorio: boolean
  ds_dicomvix_ohif: Nullable<string>
  ds_dicomvix_dwserver: string
  sn_portal_anamnese: boolean
  sn_dicomvix_laudite: boolean
  ds_dicomvix_viewer: string
  ds_dicomvix_whatsapp: string
  ds_dicomvix_gtm: Nullable<string>
  sn_dicomvix_ohif: boolean
  sn_dicomvix_video: boolean
  sn_dicomvix_mobile: boolean
}
export enum ModuleType {
  DICOMVIX = 'dicomvix',
  CLINUX = 'clinux',
  OTRS = 'otrs',
  PORTAL = 'portal',
  DOCTOR = 'doctor',
  CLIENT = 'client'
}
export type userType = 'funcionario' | 'medico' | 'paciente' | 'solicitante'
export interface Client {
  cd_empresa: number
  ds_empresa: string
  ds_portal_id: string
  ds_portal_url: string
}
export interface User {
  id: number
  idleo: number
  idmedico: number
  name: string
  email: string
  role: userType
  certificado: boolean
}
export interface MainMenu {
  cd_form: number
  ds_form: string
  ds_caption: string
  sn_modal: boolean
  sn_free: boolean
  nr_menu: number
  ds_rota: string | null
  cd_modulo: number
  ds_modulo: string
  sn_ativo: boolean
}
export type Nullable<T> = T | null
export type ID<T = string> = {
  id: T
}
export interface Alert extends ID<number> {
  description: string
  icon: string
  type: 'danger' | 'warning' | 'success' | 'info'
  seem: boolean
  urls?: string
  timeout?: number
}
export const Messages: Record<string, string> = {
  MSG_SYS_QST: 'Confirmar Operação ?',
  MSG_SYS_CAN: 'Operação Cancelada !',
  MSG_SYS_NOT: 'Operação não permitida !', // 'Acesso Negado !',
  MSG_SYS_NIF: 'Operação não informada !',
  MSG_SYS_DNI: 'Dados não informados !',
  MSG_SYS_DNE: 'Dados não encontrados !',
  MSG_SYS_DATA: 'Entrada Inválida !',
  MSG_SYS_DATE: 'Data Inválida !',
  MSG_SYS_HOUR: 'Hora Inválida !',
  MSG_SYS_TIME: 'Período Inválido !',
  MSG_SYS_FLOAT: 'Valor Inválido !',
  MSG_SYS_INT: 'Valor Inválido !',
  MSG_SYS_OOR: 'Valor fora do intervalo válido !',
  MSG_SYS_ERROR: 'Ocorreu um erro durante a execução do programa !',
  MSG_SYS_OK: 'Operação realizada com sucesso !',
  MSG_SYS_FIELD: 'Campo obrigatório não informado !',
  MSG_SYS_DEBUG: 'Modo Debug Ativo ! Deseja Continuar ?',
  MSG_SYS_CAMPO: 'Campo obrigatório [%s] não informado !',
  MSG_SYS_PRINT: 'Erro durante a impressão !',
  MSG_SYS_DLL: 'Erro ao carregar DLL !',
  MSG_SYS_BLOCK: 'Período bloqueado pelo Administrador!',
  MSG_SYS_EDITOR: 'Layout não cadastrado !',
  MSG_SYS_USER: 'Usuário não informado !',
  MSG_SYS_DOCTOR: 'Médico não informado !',
  MSG_SYS_WEB: 'Agenda via Web',
  MSG_SYS_NFE: 'A nota fiscal já foi emitida !',

  MSG_API_FNF: 'Rota não encontrada !',
  MSG_API_ERROR: 'Erro no retorno do webservice !',

  MSG_PST: 'Confirmar atualização do(s) registro(s) selecionado(s) ?',
  MSG_PST_OK: 'O registro foi gravado com sucesso !',
  MSG_PST_SAVE: 'Dados ainda não foram gravados ! Deseja salvar agora ?',
  MSG_PST_ERROR: 'Erro durante a gravação do registro !',

  MSG_DEL: 'Confirmar exclusão do registro ?',
  MSG_DEL_OK: 'O registro foi removido com sucesso !',
  MSG_DEL_ERROR: 'O registro selecionado não pode ser excluído !',

  MSG_FNF_DB: 'O registro selecionado não existe ou não está ativo !',
  MSG_FNF_OK: 'Nenhum registro encontrado !',
  MSG_FNF_ERROR: 'Arquivo não encontrado !',
  MSG_FNF_GRID: 'Nenhum registro selecionado !',

  MSG_READ_ONLY: 'Registro aberto somente para leitura !',
  MSG_READ_ERRO: 'Erro na leitura do arquivo !',

  MSG_DB_OK: 'Conexão realizada com sucesso !',
  MSG_DB_ERROR: 'Erro de conexão com o banco de dados !',

  MSG_NET_ERROR: 'Erro de conexão com a rede !',
  MSG_NET_TIME: 'O destino da rede não foi alcançado !',

  MSG_BB_ERROR: 'Erro durante a gravação do arquivo !',
  MSG_BB_EDITOR: 'Erro durante a gravação do arquivo ! Salve seu trabalho antes de continuar.',

  MSG_EXAME_SESSAO: 'O atendimento possui sessão !',
  MSG_EXAME_CONFERIDO: 'Exame já conferido pelo faturamento !',
  MSG_EXAME_COTA: 'Atingido valor máximo do controle de cota do convênio !',
  MSG_EXAME_COTA_2: 'Indisponibilidade do exame !',
  MSG_EXAME_DATA: 'Não é possível marcar horários nesse período !',
  MSG_EXAME_CONTROLE: 'O paciente já está atendido !',
  MSG_EXAME_FINAL: 'O paciente já está finalizado !',
  MSG_EXAME_PARTICULAR: 'Valor de particular já realizado !',
  MSG_EXAME_FISCAL: 'Nota Fiscal já emitida !',
  MSG_EXAME_MATERIAL: 'Exames com materiais FATURADOS não podem ser excluídos !',
  MSG_EXAME_ESTOQUE: 'Exames com materiais CONSUMIDOS não podem ser excluídos !',
  MSG_EXAME_LAUDO: 'Exames LAUDADOS não podem ser alterados/excluídos !',
  MSG_EXAME_FATURA: 'Exames FATURADOS não podem ser alterados/excluídos !',
  MSG_EXAME_PENDENCIA: 'Exames PENDENTES não podem ser alterados/excluídos !',
  MSG_EXAME_FINANCEIRO: 'Exames RECEBIDOS não podem ser excluídos !',
  MSG_EXAME_IMAGEM: 'Exames COM IMAGEM não podem ser excluídos !',
  MSG_EXAME_VALOR: 'O procedimento não possui valor de cobrança !',
  MSG_EXAME_NOT: 'O atendimento não possui exames !',
  MSG_EXAME_NULL: 'O atendimento selecionado não está mais disponível !',
  MSG_EXAME_DATA_R: 'A data de recebimento não pode ser menor que a data do atendimento !',
  MSG_EXAME_DATA_C: 'A data de conciliação não pode ser menor que a data do atendimento !',

  MSG_FINANCEIRO: 'O lançamento já foi REALIZADO e não pode ser excluído !',
  MSG_FINANCEIRO_CCLD: 'O lançamento já foi CONCILIADO e não pode ser excluído !',
  MSG_FINANCEIRO_FCDO: 'O lançamento já foi FECHADO e não pode ser excluído !',
  MSG_FINANCEIRO_ZERO: 'O lançamento não possui atendimento associado !',
  MSG_FINANCEIRO_NULL: 'Lançamento não encontrado !',

  MSG_ESTOQUE: 'Material insuficiente em estoque !',
  MSG_ESTOQUE_PEDIDO: 'O pedido já foi recebido !',

  MSG_FATURA_BLOQUEADA: 'Fatura bloqueada !',
  MSG_FATURA_FECHADA: 'Fatura conferida !',
  MSG_FATURA_ABERTA: 'Fatura não conferida !',

  MSG_LAUDO_NULL: 'O laudo não está digitado !',
  MSG_LAUDO_NAOASSINADO: 'O laudo não está assinado !',
  MSG_LAUDO_ASSINADO: 'O laudo já está assinado !',
  MSG_LAUDO_DIGITADO: 'O laudo já está digitado !',

  MSG_HORARIO: 'Horário usado apenas para controle de tempo !',
  MSG_HORARIO_FREE: 'Liberar horário da agenda ?',
  MSG_HORARIO_PAST: 'Horário passado não pode ser transferido !',
  MSG_HORARIO_CLASSE: 'Horário não permitido para o plano selecionado !',
  MSG_HORARIO_AUTORIZA: 'Horário com prazo de autorização insuficiente !',

  MSG_PACIENTE_NFE: 'Não existe valor particular no atendimento selecionado !',
  MSG_PACIENTE_SMS: 'O paciente não autoriza envio de SMS !',
  MSG_PACIENTE_NAT: 'O paciente não está atendido !',
  MSG_PACIENTE_FNF: 'O paciente não foi informado !',
  MSG_PACIENTE_INF: 'O paciente possui informações complementares !'
}
export const Icones: Record<string, string> = {
  empresa: 'i-healthicons-hospital', // i-mdi-building',
  sala: 'i-mdi-home-city',
  usuario: 'i-mdi-account-key',
  funcionario: 'i-mdi-account',
  medico: 'i-mdi-doctor',
  modalidade: 'i-mdi-desktop-mac',
  procedimento: 'i-mdi-monitor-account',
  modelo: 'i-mdi-text-box-outline',
  calendario: 'i-mdi-calendar',
  horario: 'i-mdi-clock-outline',
  layout: 'i-mdi-printer-outline',
  sistema: 'i-mdi-application-outline',
  gestao: 'i-mdi-monitor-dashboard',
  prescricao: 'i-heroicons-beaker',
  paciente: 'i-mdi-account',
  rota: 'i-mdi-truck-delivery',
  anexo: 'i-mdi-paperclip',
  imagem: 'i-mdi-file-image',
  chat: 'i-mdi-chat',
  procedencia: 'i-mdi-map-marker',
  executante: 'i-healthicons-doctor',
  revisor: 'i-healthicons-doctor-male',
  auditor: 'i-healthicons-doctor-female',
  urgencia: 'i-healthicons-ambulance',
  aviso: 'i-mdi-alert-circle-outline',
  atendimento: 'i-mdi-account-group',
  clinica: 'i-mdi-hospital-building',
  exame: 'i-mdi-account-file',
  editor: 'i-mdi-file-document-edit',
  laudo: 'i-mdi-monitor-edit',
  pendencia: 'i-mdi-alert',
  solucao: 'i-mdi-alert-remove',
  achado: 'i-mdi-magnify',
  auditoria: 'i-mdi-account-check',
  save: 'i-mdi-content-save',
  delete: 'i-mdi-delete',
  edit: 'i-mdi-pencil',
  cancel: 'i-mdi-close',
  search: 'i-mdi-magnify',
  print: 'i-mdi-printer',
  download: 'i-mdi-download',
  upload: 'i-mdi-upload',
  laudo_del: 'i-mdi-file-document-remove',
  laudo_pdf: 'i-mdi-file-pdf',
  laudo_txt: 'i-mdi-file-document',
  laudo_dif: 'i-mdi-file-compare',
  grupo: 'i-mdi-group',
  many2one: 'i-mdi-relation-many-to-one',
  many2many: 'i-mdi-relation-many-to-many',
  one2many: 'i-mdi-relation-one-to-many',
  transfer: 'i-mdi-transfer',
  sla: 'i-mdi-timer-sand',
  password: 'i-mdi-lock',
  acesso: 'i-mdi-boom-gate',
  fila: 'i-mdi-archive-cog',
  convenio: 'i-mdi-shield-account',
  plano: 'i-mdi-credit-card-outline',
  material: 'i-mdi-medication',
  material_grupo: 'i-mdi-package-variant',
  unidade: 'i-mdi-ruler',
  estoque: 'i-mdi-store',
  complemento: 'i-mdi-alert',
  texto: 'i-mdi-touch-text-outline',
  formula: 'i-mdi-function-variant',
  atendimento_ficha: 'i-mdi-account-check',
  atendimento_cancela: 'i-mdi-account-cancel',
  pesquisa: 'i-mdi-magnify-plus'
}
export const portalMenu = [
  {
    label: 'Agendamento',
    to: '/'
  },
  {
    label: 'Resultado',
    to: '/'
  },
  {
    label: 'Cadastro',
    to: '/'
  }
]
export const doctorMenu = [
  {
    label: 'Resultado',
    to: '/'
  }
]
export const otrsMenu = [
  {
    label: 'Chamados',
    to: '/'
  }
]
export const clientMenu = [
  {
    label: 'Atendimento',
    to: '/atendimento/atendimento',
    icon: Icones.atendimento
  },
  {
    label: 'Clínica',
    to: '/atendimento/clinica',
    icon: Icones.clinica
  },
  {
    label: 'Prescrição',
    to: '/laudo/prescricao',
    icon: Icones.prescricao
  }
]
export const mainMenu = [
  {
    label: 'Gerencial',
    children: [
      { label: 'Empresa', to: '/gerencial/empresa', icon: Icones.empresa },
      { label: 'Sala', to: '/gerencial/sala', icon: Icones.sala },
      { label: 'Funcionário', to: '/gerencial/funcionario', icon: Icones.funcionario },
      { label: 'Usuário', to: '/gerencial/usuario', icon: Icones.usuario },
      { label: 'Médico', to: '/gerencial/medico', icon: Icones.medico },
      { label: 'Modalidade', to: '/gerencial/modalidade', icon: Icones.modalidade },
      { label: 'Procedimento', to: '/gerencial/procedimento', icon: Icones.procedimento },
      // { label: 'Laudo', to: '/gerencial/modelo', icon: Icones.laudo },
      { label: 'Agenda', to: '/gerencial/horario', icon: Icones.horario },
      { label: 'Impressora', to: '/gerencial/layout', icon: Icones.layout },
      { label: 'Sistema', to: '/gerencial/formulario', icon: Icones.sistema }
    ]
  },
  {
    label: 'Atendimento',
    children: [
      // { label: 'Atendimento', to: '/atendimento/atendimento', icon: Icones.atendimento },
      { label: 'Atendimento', to: '/atendimento/clinica', icon: Icones.clinica },
      { label: 'Paciente', to: '/atendimento/paciente', icon: Icones.paciente },
      { label: 'Médico', to: '/atendimento/medico', icon: Icones.medico }
    ]
  },
  {
    label: 'Laudo',
    children: [
      { label: 'Gestão', to: '/laudo/gestao', icon: Icones.gestao },
      { label: 'Prescrição', to: '/laudo/prescricao', icon: Icones.prescricao },
      { label: 'Auditoria', to: '/laudo/auditoria', icon: Icones.auditoria },
      { label: 'Fila de Trabalho', to: '/laudo/fila', icon: Icones.fila },
      { label: 'Modelo', to: '/gerencial/modelo', icon: Icones.laudo },
      { label: 'Auto-Texto', to: '/laudo/texto', icon: Icones.texto }
    ]
  },
  {
    label: 'Estoque',
    children: [
      // { label: 'Estoque', to: '/estoque/estoque', icon: Icones.estoque },
      { label: 'Grupo', to: '/estoque/materialgrupo', icon: Icones.material_grupo },
      { label: 'Material', to: '/estoque/material', icon: Icones.material },
      { label: 'Unidade', to: '/estoque/unidade', icon: Icones.unidade }
    ]
  },
  {
    label: 'Faturamento',
    children: [
      { label: 'Convênio', to: '/faturamento/convenio', icon: Icones.convenio },
      { label: 'Plano', to: '/faturamento/plano', icon: Icones.plano }
    ]
  },
  // {
  //   label: 'Financeiro'
  //   // children: [
  //   //   { label: 'Lançamentos', to: '/login' },
  //   //   { label: 'Fornecedores', to: '/login' },
  //   //   { label: 'Bancos', to: '/login' },
  //   //   { label: 'Planos de Conta', to: '/login' }
  //   // ]
  // },
  {
    label: 'Relatórios',
    children: [
      { label: 'Atendimento', to: '/report/atendimento' },
      { label: 'Exames', to: '/report/exame' },
      { label: 'Laudo Analítico', to: '/report/laudo/analitico' },
      { label: 'Laudo Sintético', to: '/report/laudo/sintetico' },
      { label: 'Laudo Atrasado', to: '/report/laudo/atrasado' },
      { label: 'Laudo Recebido', to: '/report/laudo/recebido' },
      { label: 'Laudo Fila', to: '/report/laudo/fila' }
    ]
  },
  {
    label: 'Setup',
    to: '/setup'
    // children: [
    //   { label: 'Editor', to: '/tools/editor' },
    //   { label: 'Grid', to: '/tools/grid' },
    //   { label: 'Data', to: '/tools/data' },
    //   { label: 'Form', to: '/tools/form' }
    // ]
  }
]

export function setMainMenu(noChildren: boolean = false) {
  switch (useRouterStore().moduleId) {
    case ModuleType.DICOMVIX:
      return structuredClone(mainMenu)
    case ModuleType.CLINUX:
      return !noChildren ? structuredClone(mainMenu) : []
    case ModuleType.PORTAL:
      return structuredClone(portalMenu)
    case ModuleType.OTRS:
      return structuredClone(otrsMenu)
    case ModuleType.DOCTOR:
      return structuredClone(doctorMenu)
    case ModuleType.CLIENT:
      return structuredClone(clientMenu)
    default:
      return []
  }
}
