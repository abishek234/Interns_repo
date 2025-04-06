import User from '../models/User.js';
import Job from '../models/Job.js';
import nodemailer from 'nodemailer';

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        console.log(user);

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials or not an admin' });
        }
        console.log(user);

        if (user.isAdmin) {
            res.status(200).json({ message: 'Logged in successfully' });
        } else {
            res.status(403).json({ message: 'Not an admin' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const stats = async (req, res) => {
    try {
        const jobCount = await Job.countDocuments();
        const domainCounts = await Job.aggregate([
            {
                $addFields: {
                    normalizedDomain: { $toLower: '$domain' }
                }
            },
            {
                $group: {
                    _id: '$normalizedDomain',
                    count: { $sum: 1 },
                    originalDomain: { $first: '$domain' }
                }
            },
            {
                $project: {
                    _id: 0,
                    domain: '$originalDomain',
                    count: 1
                }
            }
        ]);

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ jobCount, domainCounts }));
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


const sendEmail = async (req, res) => {
    const { name, email, phone, domain } = req.body;
  const attachment = req.file;

  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail as the email service
    auth: {
      user: 'abishek.cs21@bitsathy.ac.in', // Your Gmail address
      pass: 'myznyxbaqwrgazyp' // Your Gmail password
    }
  });

  // Dynamically setting the recipient to the email provided in the form
  let mailOptions = {
    from: 'abishek.cs21@bitsathy.ac.in',
    to: 'abishek.cs21@bitsathy.ac.in', // Set the recipient to the email address filled in the form
    subject: 'New Message from Career',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDomain: ${domain}`,
    attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : []
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      console.log(email);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
}

export default { login, stats, sendEmail };