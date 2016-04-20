package br.com.nixtor.util;

import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Component;

import br.com.nixtor.model.Pedido;

@Component
public class Email {
	
	private static final String EMAIL = "meuemail@hotmail.com";
	private static final String SENHA = "minhasenha";
	private static final String DESTINATARIO = "financeiro@cherrychik.com.br";
	
	public void enviar(String assunto, String conteudo, boolean html) {
		Properties props = new Properties();
        /** Parâmetros de conexão com servidor Hotmail */
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.host", "smtp.live.com");
        props.put("mail.smtp.socketFactory.port", "587");
        props.put("mail.smtp.socketFactory.fallback", "false");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "587");

        Session session = Session.getDefaultInstance(props,
                    new javax.mail.Authenticator() {
                         protected PasswordAuthentication getPasswordAuthentication()
                         {
                               return new PasswordAuthentication(EMAIL, SENHA);
                         }
                    });

        /** Ativa Debug para sessão */
        session.setDebug(true);

        try {

              Message message = new MimeMessage(session);
              message.setFrom(new InternetAddress(EMAIL)); //Remetente

              Address[] toUser = InternetAddress //Destinatário(s)
                         .parse(DESTINATARIO);  

              message.setRecipients(Message.RecipientType.TO, toUser);
              message.setSubject(assunto);//Assunto
              
              if(html) {
            	  message.setContent(conteudo, "text/html; charset=utf-8");
              }
              else {
            	  message.setText(conteudo);  
              }
                            
              /**Método para enviar a mensagem criada*/
              Transport.send(message);

              System.out.println("Feito!!!");

         } catch (MessagingException e) {
              throw new RuntimeException(e);
        }
	}
	
	public void novoEmailPedido(Pedido pedido) {
		String html = "<table><tr><td>Nome</td><td>Quantidade</td><td>Preço Unitário</td></tr>";		
		for(int i = 0; i < pedido.getItens().size(); i++) {
			html += "<tr>";
			html += "<td>" + pedido.getItens().get(i).getNome() + "</td>";
			html += "<td>" + pedido.getItens().get(i).getQuantidade() + "</td>";
			html += "<td>R$ " + pedido.getItens().get(i).getPreco() + "</td>";
			html += "</tr>";
		}
				
		String assunto = "Novo pedido na loja";
		
		enviar(assunto, html, true);
	}
}
