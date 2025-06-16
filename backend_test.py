import requests
import json
import unittest
import re

class TestProjectRequestAPI(unittest.TestCase):
    def setUp(self):
        # Base URL for the API
        self.base_url = "http://localhost:3000/api/submit-request"
        
        # Valid request data
        self.valid_data = {
            "name": "John Smith",
            "email": "test@example.com",
            "phone": "+1234567890",
            "projectType": "BSc",
            "description": "This is a test project description for a BSc project.",
            "deadline": "2023-12-31"
        }
    
    def test_valid_complete_request(self):
        """Test a valid complete request with all fields"""
        response = requests.post(self.base_url, json=self.valid_data)
        
        # Print response for debugging
        print(f"Response status: {response.status_code}")
        print(f"Response body: {response.text}")
        
        # Check if the request was successful
        self.assertEqual(response.status_code, 200)
        
        # Parse the response JSON
        response_data = response.json()
        
        # Check if the success flag is true
        self.assertTrue(response_data.get('success'))
        
        # Check if the message is as expected
        self.assertIn('submitted successfully', response_data.get('message', ''))
    
    def test_missing_required_fields(self):
        """Test requests with missing required fields"""
        required_fields = ['name', 'email', 'projectType', 'description']
        
        for field in required_fields:
            # Create a copy of the valid data without the current field
            invalid_data = self.valid_data.copy()
            invalid_data.pop(field)
            
            # Send the request
            response = requests.post(self.base_url, json=invalid_data)
            
            # Print response for debugging
            print(f"Testing missing {field} - Response status: {response.status_code}")
            print(f"Response body: {response.text}")
            
            # Check if the request was rejected with a 400 status code
            self.assertEqual(response.status_code, 400)
            
            # Parse the response JSON
            response_data = response.json()
            
            # Check if the error message mentions missing fields
            self.assertIn('Missing required fields', response_data.get('error', ''))
    
    def test_invalid_email_format(self):
        """Test request with invalid email format"""
        invalid_email_data = self.valid_data.copy()
        invalid_email_data['email'] = "invalid-email"
        
        # Send the request
        response = requests.post(self.base_url, json=invalid_email_data)
        
        # Print response for debugging
        print(f"Testing invalid email - Response status: {response.status_code}")
        print(f"Response body: {response.text}")
        
        # The API doesn't explicitly validate email format, but we can check if it fails
        # If the API is updated to validate email format, this test should be updated
        # For now, we'll just check if the response is not 200 OK
        self.assertNotEqual(response.status_code, 200)
    
    def test_different_project_types(self):
        """Test different project types"""
        project_types = ["BSc", "MSc", "PhD", "Other"]
        
        for project_type in project_types:
            test_data = self.valid_data.copy()
            test_data['projectType'] = project_type
            
            # Send the request
            response = requests.post(self.base_url, json=test_data)
            
            # Print response for debugging
            print(f"Testing project type {project_type} - Response status: {response.status_code}")
            print(f"Response body: {response.text}")
            
            # Check if the request was successful
            self.assertEqual(response.status_code, 200)
            
            # Parse the response JSON
            response_data = response.json()
            
            # Check if the success flag is true
            self.assertTrue(response_data.get('success'))
    
    def test_optional_fields_missing(self):
        """Test request with optional fields missing"""
        optional_fields = ['phone', 'deadline']
        
        for field in optional_fields:
            # Create a copy of the valid data without the current optional field
            test_data = self.valid_data.copy()
            test_data.pop(field)
            
            # Send the request
            response = requests.post(self.base_url, json=test_data)
            
            # Print response for debugging
            print(f"Testing missing optional field {field} - Response status: {response.status_code}")
            print(f"Response body: {response.text}")
            
            # Check if the request was successful
            self.assertEqual(response.status_code, 200)
            
            # Parse the response JSON
            response_data = response.json()
            
            # Check if the success flag is true
            self.assertTrue(response_data.get('success'))

if __name__ == "__main__":
    unittest.main()