function comprar(produto) {
    const numeroWhats = "559999999999"; // Troque pelo seu número do WhatsApp
    const mensagem = encodeURIComponent(`Olá! Gostaria de comprar: ${produto}`);
    window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, "_blank");
}
