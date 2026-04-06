"use client"

import { motion } from "framer-motion"
import { dadosCliente } from "@/data/cliente"
import { MessageCircle, MapPin } from "lucide-react"

export default function FooterCTA() {
  return (
    <section className="bg-black py-12 px-6 md:px-16 flex flex-col items-center justify-center gap-8">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500 bg-clip-text text-transparent"
      >
        Pronto para um atendimento rápido?
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        className="text-gray-300 text-center max-w-lg text-lg"
      >
        Não espere mais! Solicite um orçamento agora mesmo e conte com atendimento especializado 24 horas.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
        {/* Botão Solicitar Reboque */}
        <motion.a
          href={dadosCliente.contato.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.95, boxShadow: "0 0 0 rgba(16, 185, 129, 0.5)" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.7)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base rounded-full shadow-lg transition-colors duration-300 touch-manipulation"
        >
          <MessageCircle className="h-5 w-5" stroke="currentColor" fill="none" />
          Solicitar Orçamento
        </motion.a>

        <motion.a
          href={dadosCliente.contato.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.95, boxShadow: "0 0 0 rgba(16, 185, 129, 0.5)" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.7)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-zinc-700 bg-zinc-900/50 hover:bg-emerald-500 hover:text-white text-white font-extrabold rounded-full backdrop-blur-sm transition-colors duration-300 text-center text-2xl touch-manipulation"
        >
          {dadosCliente.contato.telefone}
        </motion.a>
      </div>

      {/* Endereço */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        className="text-center mt-4"
      >
        <p className="text-gray-400 text-sm md:text-base flex items-center justify-center gap-2">
          <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0" stroke="currentColor" fill="none" />
          {dadosCliente.contato.endereco}
        </p>
      </motion.div>
    </section>
  )
}
