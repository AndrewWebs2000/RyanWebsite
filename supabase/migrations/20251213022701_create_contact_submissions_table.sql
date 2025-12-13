/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `service_type` (text, optional)
      - `message` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Allow anyone to insert new submissions (public signup)
    - Only allow reading own submissions (prevent data exposure)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Cannot read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (false);
