import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  
  const EmailMessage = ({name,emailId,message}) => {

    return (
      <Html>
        <Head />
        <Preview>New message from your portfolio</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Text style={text}>Hi Nitin,</Text>
              <Text style={text}>
                <b>{name}</b> has recently contacted you through your portfolio.
              </Text>
              <Text style={text}>Message:</Text>
              <Text style={messageStyle}>
                {message}
              </Text>
              <br/>
              <Button style={button} href={`mailto:${emailId}?subject=Nitin%20Deshpande%20replied%20to%20your%20message`}>Reply</Button>
              <Text style={footerText}>
                Sender's Name: {name}      
                <br/>
                Sender's Email: {emailId}
              </Text>
              <Text style={text}>
                <Link style={anchor} href="https://gmail.com">Visit your portfolio</Link>
              </Text>
            </Section>
            <Text style={paragraph}>Best Regards,<br/>Suyash</Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0",
  };
  
  const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    padding: "45px",
  };
  
  const text = {
    fontSize: "16px",
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "26px",
  };
  
  const messageStyle = {
    fontSize: "15px",
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "22px",
  };
  
  const footerText = {
    fontSize: "15px",
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "22px",
  };
  
  const button = {
    backgroundColor: "#007ee6",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    fontSize: "14px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    width: "70px",
    padding: "10px 5px",
  };
  
  const paragraph = {
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    fontSize: "14px",
    lineHeight: "20px",
  };

  const anchor = {
    textDecoration: "underline",
  };
  
  export default EmailMessage;
  