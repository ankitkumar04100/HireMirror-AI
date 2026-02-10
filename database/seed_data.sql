-- Insert demo users
INSERT INTO users (name, email, password)
VALUES 
('Jane Doe', 'jane@example.com', 'DemoPassword123'),
('John Smith', 'john@example.com', 'DemoPassword123'),
('Alice Brown', 'alice@example.com', 'DemoPassword123');

-- Insert demo interviews
INSERT INTO interviews (user_id, questions, answers, score)
VALUES 
(1, ARRAY['Tell me about yourself', 'Explain AI project'], ARRAY['I am Jane...', 'I built...'], 78),
(2, ARRAY['Describe a challenge', 'Behavioral question'], ARRAY['I faced...', 'I handled...'], 82);

-- Insert demo feedback
INSERT INTO feedback (user_id, job_readiness, communication, portfolio, suggestions)
VALUES 
(1, 78, 85, 92, ARRAY['Improve behavioral responses', 'Update portfolio projects']),
(2, 82, 88, 90, ARRAY['Practice technical questions', 'Improve communication']);

-- Insert demo badges
INSERT INTO badges (user_id, badge_name)
VALUES 
(1, 'Consistency Badge'),
(1, 'Portfolio Star'),
(2, 'AI Expert Badge');
