import Accordion from "../Accordion";

export default function FAQ() {
  return (
    <>
      <div id="faq" className="bg-epp-default pt-10">
        <div className="mt-1 md:max-w-screen-xl py-10 mx-auto">
          <h3 className="text-2xl md:text-4xl text-center font-semibold">
            Talk to Us & FAQs
          </h3>
          <div className="px-5 md:px-0">
          <h4 className="pt-5 text-xl md:text-2xl font-regular">General</h4>
          <Accordion
            title="What is EventPlanner Pro?"
            content="EventPlanner Pro is a comprehensive event management platform tailored for event organizers and planners. It offers an integrated suite of tools that facilitate online registration, ticketing, attendee communication, and provides in-depth post-event analysis. The platform is designed to simplify and streamline the event planning process, ensuring that organizers can create memorable experiences for attendees while maintaining efficiency and oversight. Its primary focus is to offer seamless event management, helping users create unforgettable events with ease."
          />
          <Accordion
            title="How does EventPlanner Pro differ from other event management tools?"
            content="EventPlanner Pro sets itself apart by offering a holistic suite of features tailored specifically for modern event organizers. While many event management tools may focus on one or two aspects of event planning, EventPlanner Pro provides an all-in-one solution, ensuring every phase, from online registration to post-event analysis, is handled seamlessly. Our platform is built on the foundation of user feedback, ensuring that real-world challenges faced by event organizers are addressed. Additionally, with its intuitive design, advanced analytics capabilities, and a commitment to continuous improvement, EventPlanner Pro is the go-to choice for professionals seeking efficiency, reliability, and innovation in their event management processes."
          />
          <Accordion
            title="What makes EventPlanner Pro user-friendly for those new to event management?"
            content="EventPlanner Pro is designed with both seasoned organizers and newcomers in mind. For those new to event management, the platform offers an intuitive interface, step-by-step guides, and a rich library of resources to help users get started. Features are organized logically, ensuring that even those without prior experience can navigate the system with ease. Additionally, our dedicated support team is always on hand to assist with any queries, ensuring that every user, regardless of their expertise level, can execute successful events with confidence."
          />
          <h4 className="pt-5 text-xl md:text-2xl font-regular mt-12">
            Registration & Ticketing
          </h4>
          <Accordion
            title="How do I set up online registration for my event?"
            content="Setting up online registration for your event with EventPlanner Pro is straightforward and intuitive. Here's how: Log in to your EventPlanner Pro dashboard.
Navigate to the 'Events' section and click on 'Create New Event.'
Fill in the event details such as date, time, venue, and other relevant information.
Under the 'Registration' tab, enable the 'Online Registration' option.
Customize your registration form by adding the fields you need. You can request information like attendee name, email, contact details, and any other specifics you deem necessary.
If your event has ticketed entry, set up ticket categories, pricing, and availability under the 'Ticketing' section.
Once you've configured everything to your satisfaction, click on 'Save' or 'Publish.'
You'll then receive a unique registration link which you can share on your event promotions, emails, or social media channels, inviting attendees to register.
Should you need any further assistance or have customization requirements, our support team is always available to guide you through the process."
          />
          <Accordion
            title="Can I offer different ticket types or pricing tiers?"
            content="Absolutely! With EventPlanner Pro, you can easily create multiple ticket types or pricing tiers to cater to a diverse audience or provide different access levels at your event. Here's how:

Log in to your EventPlanner Pro dashboard.
Go to the 'Ticketing' section of your specific event.
Click on 'Add Ticket Type.'
Define the ticket name (e.g., General Admission, VIP, Early Bird).
Set the price for each ticket type. You can also create free tickets if needed.
Specify any additional details such as the ticket description, total quantity available, start and end sale dates, or any special perks associated with that ticket type.
Save your changes.
You can add as many ticket types or pricing tiers as your event requires. This flexibility allows you to offer special promotions, early-bird pricing, VIP packages, or other differentiated ticketing options, ensuring you cater to the various needs and preferences of your attendees."
          />
          <Accordion
            title="Is it possible to limit the number of tickets one person can purchase for an event?"
            content="Yes, with EventPlanner Pro's 'Registration & Ticketing' features, you have the flexibility to set purchase limits for tickets. This is particularly useful for events with high demand or limited seating.

Log in to your EventPlanner Pro dashboard.
Navigate to the 'Ticketing' section of your chosen event.
Under each ticket type, you'll see an option labeled 'Max Tickets Per Order.'
Enter the maximum number of tickets you'd like a single attendee or purchaser to buy.
Save your changes.
By setting a limit, you ensure a fair distribution of tickets and prevent potential scalping or bulk buying for resale. If you have any special requirements or need assistance with this feature, our support team is always ready to help."
          />
          </div>
        </div>
      </div>
    </>
  );
}
