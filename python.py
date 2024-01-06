import sys
import json
import pyshorteners

def shorten_url(url):
    try:
        s = pyshorteners.Shortener()
        shortened_url = s.tinyurl.short(url)
        return {'success': True, 'shortUrl': shortened_url}
    except Exception as e:
        return {'success': False, 'error': str(e)}

if __name__ == '__main__':
    
    input_data = json.loads(sys.stdin.read())
    url_to_shorten = input_data['url']
    
    result = shorten_url(url_to_shorten)
    sys.stdout.write(json.dumps(result))
    sys.stdout.flush()
