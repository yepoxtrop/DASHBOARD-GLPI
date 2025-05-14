import axios from "axios";

export const API = import.meta.env.VITE_API_URL_BASIC;



export const getTickets = () => axios.get(`${API}/tickets`);
export const getMonthTickets= ()  => axios.get(`${API}/total_casos`);
export const getCountTicketsRegionalZone = ()  => axios.get(`${API}/zonas_regionales`);
export const getCountTicketsTechnicians = () => axios.get(`${API}/tecnicos`);
export const getTicketsTickets = () => axios.get(`${API}/data`);
export const getCountTicketsRegionalZoneTotal = () => axios.get(`${API}/zonas_regionales_totales`);
export const getCountTicketsTechniciansTotal = ()  => axios.get(`${API}/tecnico_total`);
export const getAlerts = ()  => axios.get(`${API}/alertas`);

export const link = import.meta.env.VITE_LINK_TICKET; 