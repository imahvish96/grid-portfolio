// import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
// import {Card, CardHeader, CardBody, Image} from "@nextui-org/card";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Cards() {
  return (
    <Card className="h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5262708838!2d76.7635803282065!3d28.643684640776414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d:0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1730029116876!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: "0" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Card>
  );
}
